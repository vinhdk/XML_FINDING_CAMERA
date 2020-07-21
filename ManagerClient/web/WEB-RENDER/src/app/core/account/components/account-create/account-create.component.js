import {AccountService as service} from '../../../../services/account.service.js';
import {Account} from '../../../../models/account.model.js';
import {ModalComponent} from '../../../../share/modal/modal.component.js';
import {SwalComponent} from '../../../../share/swal/swal.component.js';

export class AccountCreateComponent {
    constructor(props) {
        this.props = props;
        this.init();
    }
    init = () => {
        this.render();
        this.modal = new ModalComponent("account-create-modal");
        this.useTemplate();
    }
    render = () => {
        this.props.client.innerHTML = `
            <link rel="stylesheet" src="WEB-RENDER/src/app/core/account/components/account-create/account-create.component.scss" />
            <button id="account-create-button-open-modal" class="btn btn-success w-100-per">CREATE</button>
            <app-modal id="account-create-modal">
                <app-modal-header>
                    <h4>CREATE NEW ACCOUNT</h4>
                </app-modal-header>
                <app-modal-body>
                    <form id="account-create-form">
                        <div class="form-group mx-auto">
                            <label>USERNAME</label>
                            <input class="form-control" control="username" type="text"/>
                        </div>
                        <div class="form-group mt-3 mx-auto">
                            <label>PASSWORD</label>
                            <input class="form-control" control="password" type="password"/>
                        </div>
                        <div class="form-group mt-3 mx-auto">
                            <label>FULLNAME</label>
                            <input class="form-control" control="fullname" type="text"/>
                        </div>
                        <div class="form-group mt-3 mx-auto">
                            <label>PHONE</label>
                            <input class="form-control" control="phone" type="text"/>
                        </div>
                        <div class="form-group mt-3 mx-auto">
                            <label>EMAIL</label>
                            <input class="form-control" control="email" type="text"/>
                        </div>
                        <div class="form-group mt-3 mx-auto">
                            <label>ADDRESS</label>
                            <input class="form-control" control="address" type="text"/>
                        </div>
                        <div class="form-group mt-3 mx-auto">
                            <label>ROLE</label>
                            <select class="form-control" control="roleId" placholder="SELECT ROLE">
                                <option disabled selected>SELECT ROLE</option>
                                ${this.props.data.roles.map((role) =>
                `<option value="${role.id}">${role.name}</option>`
        )}
                            </select>
                        </div>
                            </select>
                        </div>
                        <button type="button" id="account-create-button-submit" class="btn btn-primary mt-3">CREATE</button>
                    </form>
                </app-modal-body>
            </app-modal>
        `;
    }
    useTemplate = () => {
        this.props.client.querySelector("button#account-create-button-open-modal").onclick = () => {
            this.openModal();
        };
    }
    openModal = () => {
        this.modal.open();
        this.form = this.props.client.querySelector("form#account-create-form");
        this.props.client.querySelector("button#account-create-button-submit").onclick = () => {
            this.useRequest();
        };
    }
    closeModal = () => {
        this.modal.close();
    }
    useRequest = () => {
        const controls = [...this.form.querySelectorAll("div.form-group input.form-control"), ...this.form.querySelectorAll("div.form-group select.form-control")];
        service.insert(Account.getData(controls))
                .then(async (res) => {
                    this.closeModal();
                    await this.props.useRefesh();
                    SwalComponent.show("MESSAGE", "CREATE SUCCESS!", "success");
                }).catch((err) => {
            SwalComponent.show("MESSAGE", "CREATE FAIL!", "danger");
        });
    }

}