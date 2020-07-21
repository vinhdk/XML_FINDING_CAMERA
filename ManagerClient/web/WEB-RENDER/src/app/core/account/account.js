import {AccountService as service} from '../../services/account.service.js';
import {RoleService as roleService} from '../../services/role.service.js';
import {Account} from '../../models/account.model.js';
import {Role} from '../../models/role.model.js';
import {AccountListComponent} from './components/account-list/account-list.component.js';
import {AccountCreateComponent} from './components/account-create/account-create.component.js';
import {AccountUpdateComponent} from './components/account-update/account-update.component.js';
import {LayoutComponent} from '../../share/layout/layout.component.js';
import {SwalComponent} from '../../share/swal/swal.component.js';
export class AccountModule {
    constructor() {
        this.init();
    }
    init = async () => {
        await this.useLoad();
        this.layout = new LayoutComponent("ACCOUNT");
        this.listComponent = new AccountListComponent({
            selector: 'app-account-list',
            client: this.layout.client.querySelector("app-account-list"),
            father: this
        });
        this.updateComponent = new AccountUpdateComponent({
            selector: 'app-account-update',
            client: this.layout.client.querySelector("app-account-update"),
            useRefesh: () => {
                this.listComponent.init();
                this.useClear();
            },
            layout: this.layout,
            data: {roles: this.roles}
        });
        this.createComponent = new AccountCreateComponent({
            selector: 'app-account-create',
            client: this.layout.client.querySelector("app-account-create"),
            useRefesh: () => {
                this.listComponent.init();
                this.useClear();
            },
            layout: this.layout,
            data: {roles: this.roles}
        });

        this.layout.client.querySelector("button#account-delete-button").onclick = () => {
            const ids = [...this.listComponent.tableComponent.props.client.querySelectorAll(".item-checkbox")].filter((checkbox) => checkbox.checked);
            if (ids.length > 0) {
                service.removeMany(Account.getXMLIds(ids.map((e) => e.value)))
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

    useLoad = async () => {
        await roleService.getAll()
                .then((res) => {
                    const dom = new DOMParser().parseFromString(res, "application/xml");
                    const nodes = [...dom.getElementsByTagName('role')];
                    this.roles = nodes.map((node) => Role.newRole(node)).filter((role) => role.name !== "Admin");
                }).catch((err) => console.log(err));
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
window.accountModule = new AccountModule();