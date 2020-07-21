import {CardService as service} from '../../../../services/card.service.js';
import {Card} from '../../../../models/card.model.js';
import {ModalComponent} from '../../../../share/modal/modal.component.js';
import {SwalComponent} from '../../../../share/swal/swal.component.js';

export class CardCreateComponent {
    constructor(props) {
        this.props = props;
        this.init();
    }
    init = () => {
        this.render();
        this.modal = new ModalComponent("card-create-modal");
        this.useTemplate();
    }

    render = () => {
        this.props.client.innerHTML = `
            <link rel="stylesheet" src="WEB-RENDER/src/app/core/card/components/card-create/card-create.component.scss" />
            <button id="card-create-button-open-modal" class="btn btn-success w-100-per">CREATE</button>
            <app-modal id="card-create-modal">
                <app-modal-header>
                    <h4>CREATE NEW CARD</h4>
                </app-modal-header>
                <app-modal-body>
                    <form id="card-create-form">
                        <div class="form-group mx-auto">
                            <label>NAME</label>
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
                        <button type="button" id="card-create-button-submit" class="btn btn-primary mt-3">CREATE</button>
                    </form>
                </app-modal-body>
            </app-modal>
        `;
    }
    useTemplate = () => {
        this.props.client.querySelector("button#card-create-button-open-modal").onclick = () => {
            this.openModal();
        };
    }
    openModal = () => {
        this.modal.open();
        this.form = this.props.client.querySelector("form#card-create-form");
        this.props.client.querySelector("button#card-create-button-submit").onclick = () => {
            this.useRequest();
        };
    }
    closeModal = () => {
        this.modal.close();
    }
    useRequest = () => {
        const controls = [...this.form.querySelectorAll("div.form-group input.form-control"), ...this.form.querySelectorAll("div.form-group select.form-control")];
        service.insert(Card.getData(controls))
                .then(async (res) => {
                    this.closeModal();
                    await this.props.useRefesh();
                    SwalComponent.show("MESSAGE", "CREATE SUCCESS!", "success");
                }).catch((err) => {
            SwalComponent.show("MESSAGE", "CREATE FAIL!", "danger");
        });
    }

}