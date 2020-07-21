import {Capacity} from '../../models/capacity.model.js';
import {CapacityService as service} from '../../services/capacity.service.js';
import {CapacityListComponent} from './components/capacity-list/capacity-list.component.js';
import {CapacityCreateComponent} from './components/capacity-create/capacity-create.component.js';
import {CapacityUpdateComponent} from './components/capacity-update/capacity-update.component.js';
import {LayoutComponent} from '../../share/layout/layout.component.js';
import {SwalComponent} from '../../share/swal/swal.component.js';

export class CapacityModule {
    constructor() {
        this.init();
    }
    init = async () => {
        this.layout = new LayoutComponent("CAPACITY");
        this.listComponent = new CapacityListComponent({
            selector: 'app-capacity-list',
            client: this.layout.client.querySelector("app-capacity-list"),
            father: this
        });
        this.updateComponent = new CapacityUpdateComponent({
            selector: 'app-capacity-update',
            client: this.layout.client.querySelector("app-capacity-update"),
            useRefesh: () => {
                this.listComponent.init();
                this.useClear();
            },
            layout: this.layout,
            data: {roles: this.roles}
        });
        this.createComponent = new CapacityCreateComponent({
            selector: 'app-capacity-create',
            client: this.layout.client.querySelector("app-capacity-create"),
            useRefesh: () => {
                this.listComponent.init();
                this.useClear();
            },
            layout: this.layout,
            data: {roles: this.roles}
        });

        this.layout.client.querySelector("button#capacity-delete-button").onclick = () => {
            const ids = [...this.listComponent.tableComponent.props.client.querySelectorAll(".item-checkbox")].filter((checkbox) => checkbox.checked);
            if (ids.length > 0) {
                service.removeMany(Capacity.getXMLIds(ids.map((e) => e.value)))
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
window.capacityModule = new CapacityModule();