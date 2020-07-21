import {CardService as service} from '../../../../services/card.service.js';
import {Card} from '../../../../models/card.model.js';
import {ModalComponent} from '../../../../share/modal/modal.component.js';
import {SwalComponent} from '../../../../share/swal/swal.component.js';

export class CardUpdateComponent {
    constructor(props) {
        this.props = props;
        this.init();
    }

    init = () => {
        this.render();
        this.modal = new ModalComponent("card-update-modal");
        this.useTemplate();
    }

    render = () => {
        this.props.client.innerHTML = `
            <link rel="stylesheet" src="WEB-RENDER/src/app/core/card/components/card-update/card-update.component.scss" />
            <button id="card-update-button-open-modal" class="btn btn-info w-100-per">UPDATE</button>
            <app-modal id="card-update-modal">
                <app-modal-header>
                    <h4>UPDATE CARD</h4>
                </app-modal-header>
                <app-modal-body>
                    <form id="card-update-form">
                        <div class="form-group m-auto">
                            <label>NAME</label>
                            <input class="form-control" type="hidden" control="id"/>
                            <input class="form-control" control="name" type="text"/>
                        </div>
                        <div class="form-group mt-3 mx-auto">
                            <label>PRICE</label>
                            <input min="1" class="form-control" control="price" type="number"/>
                        </div>
                        <div class="form-group mt-3 mx-auto">
                            <label>DETAIL URL</label>
                            <input class="form-control" control="url" type="text"/>
                        </div>
                        <div class="form-group mt-3 mx-auto">
                            <label>IMAGE URL</label>
                            <input class="form-control" control="image" type="text"/>
                        </div>
                        <div class="form-group mt-3 mx-auto">
                            <label>CAPACITY</label>
                            <select class="form-control" control="capacityId" placholder="SELECT CAPACITY">
                                <option disabled selected>SELECT CAPACITY</option>
                                ${this.props.data.capacitys.map((capacity) =>
                `<option value="${capacity.id}">${capacity.name}</option>`
        )}
                            </select>
                        </div>
                        <button type="button" id="card-update-button-submit" class="btn btn-primary mt-3">UPDATE</button>
                    </form>
                </app-modal-body>
            </app-modal>
        `;
    }
    useTemplate = () => {
        this.props.client.querySelector("button#card-update-button-open-modal").onclick = () => {
            this.openModal();

        };
    }
    openModal = () => {
        if (this.activeItem) {
            this.modal.open();
            this.props.client.querySelector("input[control='id']").value = this.activeItem.id;
            this.props.client.querySelector("input[control='name']").value = this.activeItem.name;
            this.props.client.querySelector("input[control='image']").value = this.activeItem.image;
            this.props.client.querySelector("input[control='price']").value = this.activeItem.price;
            this.props.client.querySelector("input[control='url']").value = this.activeItem.url;
            this.props.client.querySelector("select[control='capacityId']").value = this.activeItem.capacityId;
            this.form = this.props.client.querySelector("form#card-update-form");
            this.props.client.querySelector("button#card-update-button-submit").onclick = () => {
                this.useRequest();
            };
        }
    }
    closeModal = () => {
        this.modal.close();
    }
    useRequest = () => {
        const controls = [...this.form.querySelectorAll("div.form-group input.form-control"), ...this.form.querySelectorAll("div.form-group select.form-control")];
        service.update(Card.getData(controls, true))
                .then(async (res) => {
                    this.closeModal();
                    await this.props.useRefesh();
                    SwalComponent.show("MESSAGE", "UPDATE SUCCESS!", "success");
                }).catch((err) => {
            SwalComponent.show("MESSAGE", "UPDATE FAIL!", "danger");
        });
    }
}