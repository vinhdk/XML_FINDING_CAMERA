import {Category} from '../../models/category.model.js';
import {CategoryService as service} from '../../services/category.service.js';
import {CategoryListComponent} from './components/category-list/category-list.component.js';
import {CategoryCreateComponent} from './components/category-create/category-create.component.js';
import {CategoryUpdateComponent} from './components/category-update/category-update.component.js';
import {LayoutComponent} from '../../share/layout/layout.component.js';
import {SwalComponent} from '../../share/swal/swal.component.js';

export class CategoryModule {
    constructor() {
        this.init();
    }
    init = async () => {
        this.layout = new LayoutComponent("CATEGORY");
        this.listComponent = new CategoryListComponent({
            selector: 'app-category-list',
            client: this.layout.client.querySelector("app-category-list"),
            father: this
        });
        this.updateComponent = new CategoryUpdateComponent({
            selector: 'app-category-update',
            client: this.layout.client.querySelector("app-category-update"),
            useRefesh: () => {
                this.listComponent.init();
                this.useClear();
            },
            layout: this.layout,
            data: {roles: this.roles}
        });
        this.createComponent = new CategoryCreateComponent({
            selector: 'app-category-create',
            client: this.layout.client.querySelector("app-category-create"),
            useRefesh: () => {
                this.listComponent.init();
                this.useClear();
            },
            layout: this.layout,
            data: {roles: this.roles}
        });

        this.layout.client.querySelector("button#category-delete-button").onclick = () => {
            const ids = [...this.listComponent.tableComponent.props.client.querySelectorAll(".item-checkbox")].filter((checkbox) => checkbox.checked);
            if (ids.length > 0) {
                service.removeMany(Category.getXMLIds(ids.map((e) => e.value)))
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
window.categoryModule = new CategoryModule();