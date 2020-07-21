import {CameraService as service} from '../../../../services/camera.service.js';
import {Camera} from '../../../../models/camera.model.js';
import {TableComponent} from '../../../../share/table/table.component.js';
export class CameraListComponent {
    constructor(props) {
        this.props = props;
        this.init();
    }

    init = async () => {
        await service.getAll()
                .then(async (res) => {
                    const dom = new DOMParser().parseFromString(res, "application/xml");
                    const nodes = [...dom.getElementsByTagName('camera')];
                    this.cameras = nodes.map((node) => Camera.newCamera(node));
                    await this.render();
                    this.tableComponent = new TableComponent({
                        selector: 'app-table',
                        client: this.props.client.querySelector('app-table'),
                        father: this,
                        rows: this.cameras,
                        name: 'camera'});
                })
                .catch((err) => {
                    this.cameras = [];
                });
    }
    render = () => {
        this.props.client.innerHTML = `
            <link rel="stylesheet" src="WEB-RENDER/src/app/core/camera/components/camera-list/camera-list.component.scss" />
            <app-table></app-table>
        `;
    }

    useFilter = (data) => {
        const arr = (this.props.father.toggleButton.classList.contains("active-colap") ? (this.camerasFilter ? this.camerasFilter : []) : this.cameras).filter((camera) =>
            camera.name.toLowerCase().includes(data.name.toLowerCase())
                    && (!data.brandId || data.brandId === 'SELECT BRAND' ? true : camera.brandId === data.brandId)
                    && (!data.categoryId || data.categoryId === 'SELECT CATEGORY' ? true : camera.categoryId === data.categoryId)
                    && (!data.toPrice || !data.fromPrice ? true : (parseFloat(camera.price) >= data.fromPrice && parseFloat(camera.price) <= data.toPrice))
                    && (!data.fromMegapixel || !data.toMegapixel ? true : (parseFloat(camera.megapixel) >= data.fromMegapixel && parseFloat(camera.megapixel) <= data.toMegapixel))
        );
        this.tableComponent.props.rows = arr;
        this.tableComponent.useChange();
    }

    programing = (value, data) => {
        this.camerasFilter = this.cameras.sort((a,b) => a.megapixel - b.megapixel).filter((camera) => parseFloat(camera.megapixel) >= value);
        this.useFilter(data);
    }
}