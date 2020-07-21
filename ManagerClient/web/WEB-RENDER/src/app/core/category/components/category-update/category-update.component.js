import {CategoryService as service} from '../../../../services/category.service.js';
import {Category} from '../../../../models/category.model.js';
import {ModalComponent} from '../../../../share/modal/modal.component.js';
import {SwalComponent} from '../../../../share/swal/swal.component.js';

export class CategoryUpdateComponent {
    constructor(props) {
        this.props = props;
        this.init();
    }

    init = () => {
        this.render();
        this.modal = new ModalComponent("category-update-modal");
        this.useTemplate();
    }
    render = () => {
        this.props.client.innerHTML = `
            <link rel="stylesheet" src="WEB-RENDER/src/app/core/category/components/category-update/category-update.component.scss" />
            <button id="category-update-button-open-modal" class="btn btn-info w-100-per">UPDATE</button>
            <app-modal id="category-update-modal">
                <app-modal-header>
                    <h4>UPDATE CATEGORY</h4>
                </app-modal-header>
                <app-modal-body>
                    <form id="category-update-form">
                        <div class="form-group m-auto">
                            <label>NAME</label>
                            <input class="form-control" type="hidden" control="id"/>
                            <input class="form-control" control="name" type="text"/>
                        </div>
                        <button type="button" id="category-update-button-submit" class="btn btn-primary mt-3">UPDATE</button>
                    </form>
                </app-modal-body>
            </app-modal>
        `;
    }
    useTemplate = () => {
        this.props.client.querySelector("button#category-update-button-open-modal").onclick = () => {
            this.openModal();

        };
    }
    openModal = () => {
        if (this.activeItem) {
            this.modal.open();
            this.props.client.querySelector("input[control='id']").value = this.activeItem.id;
            this.props.client.querySelector("input[control='name']").value = this.activeItem.name;
            this.form = this.props.client.querySelector("form#category-update-form");
            this.props.client.querySelector("button#category-update-button-submit").onclick = () => {
                this.useRequest();
            };
        }
    }
    closeModal = () => {
        this.modal.close();
    }
    useRequest = () => {
        const controls = [...this.form.querySelectorAll("div.form-group input.form-control")];
        service.update(Category.getData(controls, true))
                .then(async (res) => {
                    this.closeModal();
                    await this.props.useRefesh();
                    SwalComponent.show("MESSAGE", "UPDATE SUCCESS!", "success");
                }).catch((err) => {
            SwalComponent.show("MESSAGE", "UPDATE FAIL!", "danger");
        });
    }
}