import {CameraService as service} from '../../../../services/camera.service.js';
import {Camera} from '../../../../models/camera.model.js';
import {ModalComponent} from '../../../../share/modal/modal.component.js';
import {SwalComponent} from '../../../../share/swal/swal.component.js';

export class CameraCreateComponent {
    constructor(props) {
        this.props = props;
        this.init();
    }
    init = () => {
        this.render();
        this.modal = new ModalComponent("camera-create-modal");
        this.useTemplate();
    }

    render = () => {
        this.props.client.innerHTML = `
            <link rel="stylesheet" src="WEB-RENDER/src/app/core/camera/components/camera-create/camera-create.component.scss" />
            <button id="camera-create-button-open-modal" class="btn btn-success w-100-per">CREATE</button>
            <app-modal id="camera-create-modal">
                <app-modal-header>
                    <h4>CREATE NEW CAMERA</h4>
                </app-modal-header>
                <app-modal-body>
                    <form id="camera-create-form">
                        <div class="form-group mx-auto">
                            <label>NAME</label>
                            <input class="form-control" control="name" type="text"/>
                        </div>
                        <div class="form-group mt-3 mx-auto">
                            <label>MEGAPIXEL</label>
                            <input min="1" class="form-control" control="megapixel" type="number"/>
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
                            <label>BRAND</label>
                            <select class="form-control" control="brandId" placholder="SELECT BRAND">
                                <option disabled selected>SELECT BRAND</option>
                                ${this.props.data.brands.map((brand) =>
                `<option value="${brand.id}">${brand.name}</option>`
        )}
                            </select>
                        </div>
                        <div class="form-group mt-3 mx-auto">
                            <label>CATEGORY</label>
                            <select class="form-control" control="categoryId" placholder="SELECT CATEGORY">
                                <option disabled selected>SELECT CATEGORY</option>
                                ${this.props.data.categorys.map((category) =>
                `<option value="${category.id}">${category.name}</option>`
        )}
                            </select>
                        </div>
                        <button type="button" id="camera-create-button-submit" class="btn btn-primary mt-3">CREATE</button>
                    </form>
                </app-modal-body>
            </app-modal>
        `;
    }
    useTemplate = () => {
        this.props.client.querySelector("button#camera-create-button-open-modal").onclick = () => {
            this.openModal();
        };
    }
    openModal = () => {
        this.modal.open();
        this.form = this.props.client.querySelector("form#camera-create-form");
        this.props.client.querySelector("button#camera-create-button-submit").onclick = () => {
            this.useRequest();
        };
    }
    closeModal = () => {
        this.modal.close();
    }
    useRequest = () => {
        const controls = [...this.form.querySelectorAll("div.form-group input.form-control"), ...this.form.querySelectorAll("div.form-group select.form-control")];
        service.insert(Camera.getData(controls))
                .then(async (res) => {
                    this.closeModal();
                    await this.props.useRefesh();
                    SwalComponent.show("MESSAGE", "CREATE SUCCESS!", "success");
                }).catch((err) => {
            console.log(err);
            SwalComponent.show("MESSAGE", "CREATE FAIL!", "danger");
        });
    }

}