import {Brand} from '../../models/brand.model.js';
import {BrandService as service} from '../../services/brand.service.js';
import {BrandListComponent} from './components/brand-list/brand-list.component.js';
import {BrandCreateComponent} from './components/brand-create/brand-create.component.js';
import {BrandUpdateComponent} from './components/brand-update/brand-update.component.js';
import {LayoutComponent} from '../../share/layout/layout.component.js';
import {SwalComponent} from '../../share/swal/swal.component.js';
export class BrandModule {
    constructor() {
        this.init();
    }
    init = async () => {
        this.layout = new LayoutComponent("BRAND");
        this.listComponent = new BrandListComponent({
            selector: 'app-brand-list',
            client: this.layout.client.querySelector("app-brand-list"),
            father: this
        });
        this.updateComponent = new BrandUpdateComponent({
            selector: 'app-brand-update',
            client: this.layout.client.querySelector("app-brand-update"),
            useRefesh: () => {
                this.listComponent.init();
                this.useClear();
            },
            layout: this.layout,
            data: {roles: this.roles}
        });
        this.createComponent = new BrandCreateComponent({
            selector: 'app-brand-create',
            client: this.layout.client.querySelector("app-brand-create"),
            useRefesh: () => {
                this.listComponent.init();
                this.useClear();
            },
            layout: this.layout,
            data: {roles: this.roles}
        });

        this.layout.client.querySelector("button#brand-delete-button").onclick = () => {
            const ids = [...this.listComponent.tableComponent.props.client.querySelectorAll(".item-checkbox")].filter((checkbox) => checkbox.checked);
            if (ids.length > 0) {
                service.removeMany(Brand.getXMLIds(ids.map((e) => e.value)))
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
window.brandModule = new BrandModule();