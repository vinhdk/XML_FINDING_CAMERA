import {CapacityService as service} from '../../../../services/capacity.service.js';
import {Capacity} from '../../../../models/capacity.model.js';
import {ModalComponent} from '../../../../share/modal/modal.component.js';
import {SwalComponent} from '../../../../share/swal/swal.component.js';

export class CapacityUpdateComponent {
    constructor(props) {
        this.props = props;
        this.init();
    }

    init = () => {
        this.render();
        this.modal = new ModalComponent("capacity-update-modal");
        this.useTemplate();
    }
    render = () => {
        this.props.client.innerHTML = `
            <link rel="stylesheet" src="WEB-RENDER/src/app/core/capacity/components/capacity-update/capacity-update.component.scss" />
            <button id="capacity-update-button-open-modal" class="btn btn-info w-100-per">UPDATE</button>
            <app-modal id="capacity-update-modal">
                <app-modal-header>
                    <h4>UPDATE CAPACITY</h4>
                </app-modal-header>
                <app-modal-body>
                    <form id="capacity-update-form">
                        <div class="form-group m-auto">
                            <label>NAME</label>
                            <input class="form-control" type="hidden" control="id"/>
                            <input class="form-control" control="name" type="text"/>
                        </div>
                        <button type="button" id="capacity-update-button-submit" class="btn btn-primary mt-3">UPDATE</button>
                    </form>
                </app-modal-body>
            </app-modal>
        `;
    }
    useTemplate = () => {
        this.props.client.querySelector("button#capacity-update-button-open-modal").onclick = () => {
            this.openModal();

        };
    }
    openModal = () => {
        if (this.activeItem) {
            this.modal.open();
            this.props.client.querySelector("input[control='id']").value = this.activeItem.id;
            this.props.client.querySelector("input[control='name']").value = this.activeItem.name;
            this.form = this.props.client.querySelector("form#capacity-update-form");
            this.props.client.querySelector("button#capacity-update-button-submit").onclick = () => {
                this.useRequest();
            };
        }
    }
    closeModal = () => {
        this.modal.close();
    }
    useRequest = () => {
        const controls = [...this.form.querySelectorAll("div.form-group input.form-control")];
        service.update(Capacity.getData(controls, true))
                .then(async (res) => {
                    this.closeModal();
                    await this.props.useRefesh();
                    SwalComponent.show("MESSAGE", "UPDATE SUCCESS!", "success");
                }).catch((err) => {
            SwalComponent.show("MESSAGE", "UPDATE FAIL!", "danger");
        });
    }
}