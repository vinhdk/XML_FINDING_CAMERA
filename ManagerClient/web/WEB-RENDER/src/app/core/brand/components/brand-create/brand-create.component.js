import {BrandService as service} from '../../../../services/brand.service.js';
import {Brand} from '../../../../models/brand.model.js';
import {ModalComponent} from '../../../../share/modal/modal.component.js';
import {SwalComponent} from '../../../../share/swal/swal.component.js';
export class BrandCreateComponent {
    constructor(props) {
        this.props = props;
        this.init();
    }
    init = () => {
        this.render();
        this.modal = new ModalComponent("brand-create-modal");
        this.useTemplate();
    }
    render = () => {
        this.props.client.innerHTML = `
            <link rel="stylesheet" src="WEB-RENDER/src/app/core/brand/components/brand-create/brand-create.component.scss" />
            <button id="brand-create-button-open-modal" class="btn btn-success w-100-per">CREATE</button>
            <app-modal id="brand-create-modal">
                <app-modal-header>
                    <h4>CREATE NEW BRAND</h4>
                </app-modal-header>
                <app-modal-body>
                    <form id="brand-create-form">
                        <div class="form-group m-auto">
                            <label>NAME</label>
                            <input class="form-control" control="name" type="text"/>
                        </div>
                        <button type="button" id="brand-create-button-submit" class="btn btn-primary mt-3">CREATE</button>
                    </form>
                </app-modal-body>
            </app-modal>
        `;
    }
    useTemplate = () => {
        this.props.client.querySelector("button#brand-create-button-open-modal").onclick = () => {
            this.openModal();
        };
    }
    openModal = () => {
        this.modal.open();
        this.form = this.props.client.querySelector("form#brand-create-form");
        this.props.client.querySelector("button#brand-create-button-submit").onclick = () => {
            this.useRequest();
        };
    }
    closeModal = () => {
        this.modal.close();
    }
    useRequest = () => {
        const controls = [...this.form.querySelectorAll("div.form-group input.form-control")];
        service.insert(Brand.getData(controls))
                .then(async (res) => {
                    this.closeModal();
                    await this.props.useRefesh();
                    SwalComponent.show("MESSAGE", "CREATE SUCCESS!", "success");
                }).catch((err) => {
            SwalComponent.show("MESSAGE", "CREATE FAIL!", "danger");
        });
    }
}