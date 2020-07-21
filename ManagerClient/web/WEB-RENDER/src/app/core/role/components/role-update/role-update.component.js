import {RoleService as service} from '../../../../services/role.service.js';
import {Role} from '../../../../models/role.model.js';
import {ModalComponent} from '../../../../share/modal/modal.component.js';
import {SwalComponent} from '../../../../share/swal/swal.component.js';

export class RoleUpdateComponent {
    constructor(props) {
        this.props = props;
        this.init();
    }

    init = () => {
        this.render();
        this.modal = new ModalComponent("role-update-modal");
        this.useTemplate();
    }
    render = () => {
        this.props.client.innerHTML = `
            <link rel="stylesheet" src="WEB-RENDER/src/app/core/role/components/role-update/role-update.component.scss" />
            <button id="role-update-button-open-modal" class="btn btn-info w-100-per">UPDATE</button>
            <app-modal id="role-update-modal">
                <app-modal-header>
                    <h4>UPDATE ROLE</h4>
                </app-modal-header>
                <app-modal-body>
                    <form id="role-update-form">
                        <div class="form-group m-auto">
                            <label>NAME</label>
                            <input class="form-control" type="hidden" control="id"/>
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
                            <select class="form-control" control="canActiveCrawler" placholder="SELECT CRAWLER">
                                <option value="true">CAN</option>
                                <option value="false" selected>CAN NOT</option>
                            </select>
                        </div>
                        <button type="button" id="role-update-button-submit" class="btn btn-primary mt-3">UPDATE</button>
                    </form>
                </app-modal-body>
            </app-modal>
        `;
    }
    useTemplate = () => {
        this.props.client.querySelector("button#role-update-button-open-modal").onclick = () => {
            this.openModal();

        };
    }
    openModal = () => {
        if (this.activeItem) {
            this.modal.open();
            this.props.client.querySelector("input[control='id']").value = this.activeItem.id;
            this.props.client.querySelector("input[control='name']").value = this.activeItem.name;
            this.props.client.querySelector("select[control='canActiveAccount']").value = this.activeItem.canActiveAccount;
            this.props.client.querySelector("select[control='canActiveRole']").value = this.activeItem.canActiveRole;
            this.props.client.querySelector("select[control='canActiveBrand']").value = this.activeItem.canActiveBrand;
            this.props.client.querySelector("select[control='canActiveCategory']").value = this.activeItem.canActiveCategory;
            this.props.client.querySelector("select[control='canActiveCapacity']").value = this.activeItem.canActiveCapacity;
            this.props.client.querySelector("select[control='canActiveCamera']").value = this.activeItem.canActiveCamera;
            this.props.client.querySelector("select[control='canActiveCard']").value = this.activeItem.canActiveCard;
            this.props.client.querySelector("select[control='canActiveCrawler']").value = this.activeItem.canActiveCrawler;
            this.form = this.props.client.querySelector("form#role-update-form");
            this.props.client.querySelector("button#role-update-button-submit").onclick = () => {
                this.useRequest();
            };
        }
    }
    closeModal = () => {
        this.modal.close();
    }
    useRequest = () => {
        const controls = [...this.form.querySelectorAll("div.form-group input.form-control"), ...this.form.querySelectorAll("div.form-group select.form-control")];
        service.update(Role.getData(controls, true))
                .then(async (res) => {
                    this.closeModal();
                    await this.props.useRefesh();
                    SwalComponent.show("MESSAGE", "UPDATE SUCCESS!", "success");
                }).catch((err) => {
            SwalComponent.show("MESSAGE", "UPDATE FAIL!", "danger");
        });
    }
}