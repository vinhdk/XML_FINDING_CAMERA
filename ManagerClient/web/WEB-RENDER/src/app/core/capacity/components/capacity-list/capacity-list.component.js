import {CapacityService as service} from '../../../../services/capacity.service.js';
import {Capacity} from '../../../../models/capacity.model.js';
import {TableComponent} from '../../../../share/table/table.component.js';
export class CapacityListComponent {
    constructor(props) {
        this.props = props;
        this.init();
    }

    init = async () => {
        await service.getAll()
                .then(async (res) => {
                    const dom = new DOMParser().parseFromString(res, "application/xml");
                    const nodes = [...dom.getElementsByTagName('capacity')];
                    this.capacitys = nodes.map((node) => Capacity.newCapacity(node));
                    await this.render();
                    this.tableComponent = new TableComponent({
                        selector: 'app-table',
                        client: this.props.client.querySelector('app-table'),
                        father: this,
                        rows: this.capacitys,
                        name: 'capacity',
                        useChangeItem: (activeItem) => {
                            this.props.father.updateComponent.activeItem = activeItem;
                        }});
                })
                .catch((err) => {
                    this.capacitys = [];
                });
    }
    render = () => {
        this.props.client.innerHTML = `
            <link rel="stylesheet" src="WEB-RENDER/src/app/core/capacity/components/capacity-list/capacity-list.component.scss" />
            <app-table></app-table>
        `;
    }

    useFilter = (value) => {
        const arr = this.capacitys.filter((capacity) => capacity.name.toLowerCase().includes(value.toLowerCase()));
        this.tableComponent.props.rows = arr;
        this.tableComponent.useChange();
    }

}