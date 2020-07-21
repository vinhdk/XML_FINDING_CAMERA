import {CategoryService as service} from '../../../../services/category.service.js';
import {Category} from '../../../../models/category.model.js';
import {ModalComponent} from '../../../../share/modal/modal.component.js';
import {SwalComponent} from '../../../../share/swal/swal.component.js';

export class CategoryCreateComponent {
    constructor(props) {
        this.props = props;
        this.init();
    }
    init = () => {
        this.render();
        this.modal = new ModalComponent("category-create-modal");
        this.useTemplate();
    }
    render = () => {
        this.props.client.innerHTML = `
            <link rel="stylesheet" src="WEB-RENDER/src/app/core/category/components/category-create/category-create.component.scss" />
            <button id="category-create-button-open-modal" class="btn btn-success w-100-per">CREATE</button>
            <app-modal id="category-create-modal">
                <app-modal-header>
                    <h4>CREATE NEW CATEGORY</h4>
                </app-modal-header>
                <app-modal-body>
                    <form id="category-create-form">
                        <div class="form-group m-auto">
                            <label>NAME</label>
                            <input class="form-control" control="name" type="text"/>
                        </div>
                        <button type="button" id="category-create-button-submit" class="btn btn-primary mt-3">CREATE</button>
                    </form>
                </app-modal-body>
            </app-modal>
        `;
    }
    useTemplate = () => {
        this.props.client.querySelector("button#category-create-button-open-modal").onclick = () => {
            this.openModal();
        };
    }
    openModal = () => {
        this.modal.open();
        this.form = this.props.client.querySelector("form#category-create-form");
        this.props.client.querySelector("button#category-create-button-submit").onclick = () => {
            this.useRequest();
        };
    }
    closeModal = () => {
        this.modal.close();
    }
    useRequest = () => {
        const controls = [...this.form.querySelectorAll("div.form-group input.form-control")];
        service.insert(Category.getData(controls))
                .then(async (res) => {
                    this.closeModal();
                    await this.props.useRefesh();
                    SwalComponent.show("MESSAGE", "CREATE SUCCESS!", "success");
                }).catch((err) => {
            SwalComponent.show("MESSAGE", "CREATE FAIL!", "danger");
        });
    }
}