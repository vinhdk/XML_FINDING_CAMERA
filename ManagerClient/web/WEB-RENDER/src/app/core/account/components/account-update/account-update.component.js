import {AccountService as service} from '../../../../services/account.service.js';
import {Account} from '../../../../models/account.model.js';
import {ModalComponent} from '../../../../share/modal/modal.component.js';
import {SwalComponent} from '../../../../share/swal/swal.component.js';
export class AccountUpdateComponent {
    constructor(props) {
        this.props = props;
        this.init();
    }

    init = () => {
        this.render();
        this.modal = new ModalComponent("account-update-modal");
        this.useTemplate();
    }
    render = () => {
        this.props.client.innerHTML = `
            <link rel="stylesheet" src="WEB-RENDER/src/app/core/account/components/account-update/account-update.component.scss" />
            <button id="account-update-button-open-modal" class="btn btn-info w-100-per">UPDATE</button>
            <app-modal id="account-update-modal">
                <app-modal-header>
                    <h4>UPDATE ACCOUNT</h4>
                </app-modal-header>
                <app-modal-body>
                    <form id="account-update-form">
                        <div class="form-group mx-auto">
                            <label>USERNAME</label>
                            <input readonly class="form-control" control="username" type="text"/>
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
                        <button type="button" id="account-update-button-submit" class="btn btn-primary mt-3">UPDATE</button>
                    </form>
                </app-modal-body>
            </app-modal>
        `;
    }
    useTemplate = () => {
        this.props.client.querySelector("button#account-update-button-open-modal").onclick = () => {
            this.openModal();

        };
    }
    openModal = () => {
        if (this.activeItem) {
            this.modal.open();
            this.props.client.querySelector("input[control='username']").value = this.activeItem.id;
            this.props.client.querySelector("input[control='fullname']").value = this.activeItem.fullname;
            this.props.client.querySelector("input[control='phone']").value = this.activeItem.phone;
            this.props.client.querySelector("input[control='email']").value = this.activeItem.email;
            this.props.client.querySelector("input[control='address']").value = this.activeItem.address;
            this.props.client.querySelector("select[control='roleId']").value = this.activeItem.roleId;
            this.form = this.props.client.querySelector("form#account-update-form");
            this.props.client.querySelector("button#account-update-button-submit").onclick = () => {
                this.useRequest();
            };
        }
    }
    closeModal = () => {
        this.modal.close();
    }
    useRequest = () => {
        const controls = [...this.form.querySelectorAll("div.form-group input.form-control"), ...this.form.querySelectorAll("div.form-group select.form-control")];
        service.update(Account.getData(controls, true))
                .then(async (res) => {
                    this.closeModal();
                    await this.props.useRefesh();
                    SwalComponent.show("MESSAGE", "UPDATE SUCCESS!", "success");
                }).catch((err) => {
            SwalComponent.show("MESSAGE", "UPDATE FAIL!", "danger");
        });
    }
}