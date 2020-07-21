import {RoleService as service} from '../../../../services/role.service.js';
import {Role} from '../../../../models/role.model.js';
import {ModalComponent} from '../../../../share/modal/modal.component.js';
import {SwalComponent} from '../../../../share/swal/swal.component.js';

export class RoleCreateComponent {
    constructor(props) {
        this.props = props;
        this.init();
    }
    init = () => {
        this.render();
        this.modal = new ModalComponent("role-create-modal");
        this.useTemplate();
    }
    render = () => {
        this.props.client.innerHTML = `
            <link rel="stylesheet" src="WEB-RENDER/src/app/core/role/components/role-create/role-create.component.scss" />
            <button id="role-create-button-open-modal" class="btn btn-success w-100-per">CREATE</button>
            <app-modal id="role-create-modal">
                <app-modal-header>
                    <h4>CREATE NEW ROLE</h4>
                </app-modal-header>
                <app-modal-body>
                    <form id="role-create-form">
                        <div class="form-group m-auto">
                            <label>NAME</label>
                            <input class="form-control" control="name" type="text"/>
                        </div>
                        <div class="form-group mt-3 mx-auto">
                            <label>ACTIVE ACCOUNT</label>
                            <select class="form-control" control="canActiveAccount" placholder="SELECT ACCOUNT">
                                <option value="true">CAN</option>
                                <option value="false" selected>CAN NOT</option>
                            </select>
                        </div>
                        <div class="form-group mt-3 mx-auto">
                            <label>ACTIVE ROLE</label>
                            <select class="form-control" control="canActiveRole" placholder="SELECT ROLE">
                                <option value="true">CAN</option>
                                <option value="false" selected>CAN NOT</option>
                            </select>
                        </div>
                        <div class="form-group mt-3 mx-auto">
                            <label>ACTIVE BRAND</label>
                            <select class="form-control" control="canActiveBrand" placholder="SELECT BRAND">
                                <option value="true">CAN</option>
                                <option value="false" selected>CAN NOT</option>
                            </select>
                        </div>
                        <div class="form-group mt-3 mx-auto">
                            <label>ACTIVE CATEGORY</label>
                            <select class="form-control" control="canActiveCategory" placholder="SELECT CATEGORY">
                                <option value="true">CAN</option>
                                <option value="false" selected>CAN NOT</option>
                            </select>
                        </div>
                        <div class="form-group mt-3 mx-auto">
                            <label>ACTIVE CAPACITY</label>
                            <select class="form-control" control="canActiveCapacity" placholder="SELECT CAPACITY">
                                <option value="true">CAN</option>
                                <option value="false" selected>CAN NOT</option>
                            </select>
                        </div>
                        <div class="form-group mt-3 mx-auto">
                            <label>ACTIVE CAMERA</label>
                            <select class="form-control" control="canActiveCamera" placholder="SELECT CAMERA">
                                <option value="true">CAN</option>
                                <option value="false" selected>CAN NOT</option>
                            </select>
                        </div>
                        <div class="form-group mt-3 mx-auto">
                            <label>ACTIVE CARD</label>
                            <select class="form-control" control="canActiveCard" placholder="SELECT CARD">
                                <option value="true">CAN</option>
                                <option value="false" selected>CAN NOT</option>
                            </select>
                        </div>
                        <div class="form-group mt-3 mx-auto">
                            <label>ACTIVE CRAWLER</label>
                            <select class="form-control" control="canActiveCralwer" placholder="SELECT CRAWLER">
                                <option value="true">CAN</option>
                                <option value="false" selected>CAN NOT</option>
                            </select>
                        </div>
                        <button type="button" id="role-create-button-submit" class="btn btn-primary mt-3">CREATE</button>
                    </form>
                </app-modal-body>
            </app-modal>
        `;
    }
    useTemplate = () => {
        this.props.client.querySelector("button#role-create-button-open-modal").onclick = () => {
            this.openModal();
        };
    }
    openModal = () => {
        this.modal.open();
        this.form = this.props.client.querySelector("form#role-create-form");
        this.props.client.querySelector("button#role-create-button-submit").onclick = () => {
            this.useRequest();
        };
    }
    closeModal = () => {
        this.modal.close();
    }
    useRequest = () => {
        const controls = [...this.form.querySelectorAll("div.form-group input.form-control"), ...this.form.querySelectorAll("div.form-group select.form-control")];
        service.insert(Role.getData(controls))
                .then(async (res) => {
                    this.closeModal();
                    await this.props.useRefesh();
                    SwalComponent.show("MESSAGE", "CREATE SUCCESS!", "success");
                }).catch((err) => {
            SwalComponent.show("MESSAGE", "CREATE FAIL!", "danger");
        });
    }
}