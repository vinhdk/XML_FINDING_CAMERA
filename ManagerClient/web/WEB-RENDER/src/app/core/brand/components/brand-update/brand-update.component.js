import {BrandService as service} from '../../../../services/brand.service.js';
import {Brand} from '../../../../models/brand.model.js';
import {ModalComponent} from '../../../../share/modal/modal.component.js';
import {SwalComponent} from '../../../../share/swal/swal.component.js';

export class BrandUpdateComponent {
    constructor(props) {
        this.props = props;
        this.init();
    }

    init = () => {
        this.render();
        this.modal = new ModalComponent("brand-update-modal");
        this.useTemplate();
    }
    render = () => {
        this.props.client.innerHTML = `
            <link rel="stylesheet" src="WEB-RENDER/src/app/core/brand/components/brand-update/brand-update.component.scss" />
            <button id="brand-update-button-open-modal" class="btn btn-info w-100-per">UPDATE</button>
            <app-modal id="brand-update-modal">
                <app-modal-header>
                    <h4>UPDATE BRAND</h4>
                </app-modal-header>
                <app-modal-body>
                    <form id="brand-update-form">
                        <div class="form-group m-auto">
                            <label>NAME</label>
                            <input class="form-control" type="hidden" control="id"/>
                            <input class="form-control" control="name" type="text"/>
                        </div>
                        <button type="button" id="brand-update-button-submit" class="btn btn-primary mt-3">UPDATE</button>
                    </form>
                </app-modal-body>
            </app-modal>
        `;
    }
    useTemplate = () => {
        this.props.client.querySelector("button#brand-update-button-open-modal").onclick = () => {
            this.openModal();

        };
    }
    openModal = () => {
        if (this.activeItem) {
            this.modal.open();
            this.props.client.querySelector("input[control='id']").value = this.activeItem.id;
            this.props.client.querySelector("input[control='name']").value = this.activeItem.name;
            this.form = this.props.client.querySelector("form#brand-update-form");
            this.props.client.querySelector("button#brand-update-button-submit").onclick = () => {
                this.useRequest();
            };
        }
    }
    closeModal = () => {
        this.modal.close();
    }
    useRequest = () => {
        const controls = [...this.form.querySelectorAll("div.form-group input.form-control")];
        service.update(Brand.getData(controls, true))
                .then(async (res) => {
                    this.closeModal();
                    await this.props.useRefesh();
                    SwalComponent.show("MESSAGE", "UPDATE SUCCESS!", "success");
                }).catch((err) => {
            SwalComponent.show("MESSAGE", "UPDATE FAIL!", "danger");
        });
    }
}