import {BrandService as service} from '../../../../services/brand.service.js';
import {Brand} from '../../../../models/brand.model.js';
import {TableComponent} from '../../../../share/table/table.component.js';
export class BrandListComponent {
    constructor(props) {
        this.props = props;
        this.init();
    }

    init = async () => {
        await service.getAll()
                .then(async (res) => {
                    const dom = new DOMParser().parseFromString(res, "application/xml");
                    const nodes = [...dom.getElementsByTagName('brand')];
                    this.brands = nodes.map((node) => Brand.newBrand(node));
                    await this.render();
                    this.tableComponent = new TableComponent({
                        selector: 'app-table',
                        client: this.props.client.querySelector('app-table'),
                        father: this,
                        rows: this.brands,
                        name: 'brand',
                        useChangeItem: (activeItem) => {
                            this.props.father.updateComponent.activeItem = activeItem;
                        }});
                })
                .catch((err) => {
                    this.brands = [];
                });
    }
    render = () => {
        this.props.client.innerHTML = `
            <link rel="stylesheet" src="WEB-RENDER/src/app/core/brand/components/brand-list/brand-list.component.scss" />
            <app-table></app-table>
        `;
    }

    useFilter = (value) => {
        const arr = this.brands.filter((brand) => brand.name.toLowerCase().includes(value.toLowerCase()));
        this.tableComponent.props.rows = arr;
        this.tableComponent.useChange();
    }
}