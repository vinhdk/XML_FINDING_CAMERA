import {Role} from '../../models/role.model.js';
import {RoleService as service} from '../../services/role.service.js';
import {RoleListComponent} from './components/role-list/role-list.component.js';
import {RoleCreateComponent} from './components/role-create/role-create.component.js';
import {RoleUpdateComponent} from './components/role-update/role-update.component.js';
import {LayoutComponent} from '../../share/layout/layout.component.js';
import {SwalComponent} from '../../share/swal/swal.component.js';

export class RoleModule {
    constructor() {
        this.init();
    }
    init = async () => {
        this.layout = new LayoutComponent("ROLE");
        this.listComponent = new RoleListComponent({
            selector: 'app-role-list',
            client: this.layout.client.querySelector("app-role-list"),
            father: this
        });
        this.updateComponent = new RoleUpdateComponent({
            selector: 'app-role-update',
            client: this.layout.client.querySelector("app-role-update"),
            useRefesh: () => {
                this.listComponent.init();
                this.useClear();
            },
            layout: this.layout,
            data: {roles: this.roles}
        });
        this.createComponent = new RoleCreateComponent({
            selector: 'app-role-create',
            client: this.layout.client.querySelector("app-role-create"),
            useRefesh: () => {
                this.listComponent.init();
                this.useClear();
            },
            layout: this.layout,
            data: {roles: this.roles}
        });

        this.layout.client.querySelector("button#role-delete-button").onclick = () => {
            const ids = [...this.listComponent.tableComponent.props.client.querySelectorAll(".item-checkbox")].filter((checkbox) => checkbox.checked);
            if (ids.length > 0) {
                service.removeMany(Role.getXMLIds(ids.map((e) => e.value)))
                        .then(async (res) => {
                            await this.listComponent.init();
                            this.useClear();
                            SwalComponent.show("MESSAGE", "DELETE SUCCESS!", "success");

                        }).catch((err) => {
                    SwalComponent.show("MESSAGE", "DELETE FAIL!", "danger");
                });
            }
        };
        this.useTemplate();
    }
    useTemplate = () => {
        const input = this.layout.client.querySelector("input[name='name']");
        input.onkeyup = () => {
            this.listComponent.useFilter(input.value);
        };
    }
    useClear = () => {
        this.layout.client.querySelector("input[name='name']").value = "";
    }
}
window.roleModule = new RoleModule();