import {RoleService as service} from '../../../../services/role.service.js';
import {Role} from '../../../../models/role.model.js';
import {TableComponent} from '../../../../share/table/table.component.js';
export class RoleListComponent {
    constructor(props) {
        this.props = props;
        this.init();
    }

    init = async () => {
        await service.getAll()
                .then(async (res) => {
                    const dom = new DOMParser().parseFromString(res, "application/xml");
                    const nodes = [...dom.getElementsByTagName('role')];
                    this.roles = nodes.map((node) => Role.newRole(node));
                    await this.render();
                    this.tableComponent = new TableComponent({
                        selector: 'app-table',
                        client: this.props.client.querySelector('app-table'),
                        father: this,
                        rows: this.roles,
                        name: 'role',
                        useChangeItem: (activeItem) => {
                            this.props.father.updateComponent.activeItem = activeItem;
                        }});
                })
                .catch((err) => {
                    this.roles = [];
                });
    }
    render = () => {
        this.props.client.innerHTML = `
            <link rel="stylesheet" src="WEB-RENDER/src/app/core/role/components/role-list/role-list.component.scss" />
            <app-table></app-table>
        `;
    }

    useFilter = (value) => {
        const arr = this.roles.filter((role) => role.name.toLowerCase().includes(value.toLowerCase()));
        this.tableComponent.props.rows = arr;
        this.tableComponent.useChange();
    }

}