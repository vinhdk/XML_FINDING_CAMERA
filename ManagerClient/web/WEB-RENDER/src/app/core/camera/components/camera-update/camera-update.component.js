import {CameraService as service} from '../../../../services/camera.service.js';
import {Camera} from '../../../../models/camera.model.js';
import {ModalComponent} from '../../../../share/modal/modal.component.js';
import {SwalComponent} from '../../../../share/swal/swal.component.js';

export class CameraUpdateComponent {
    constructor(props) {
        this.props = props;
        this.init();
    }

    init = () => {
        this.render();
        this.modal = new ModalComponent("camera-update-modal");
        this.useTemplate();
    }

    render = () => {
        this.props.client.innerHTML = `
            <link rel="stylesheet" src="WEB-RENDER/src/app/core/camera/components/camera-update/camera-update.component.scss" />
            <button id="camera-update-button-open-modal" class="btn btn-info w-100-per">UPDATE</button>
            <app-modal id="camera-update-modal">
                <app-modal-header>
                    <h4>UPDATE CAMERA</h4>
                </app-modal-header>
                <app-modal-body>
                    <form id="camera-update-form">
                        <div class="form-group m-auto">
                            <label>NAME</label>
                            <input class="form-control" type="hidden" control="id"/>
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
                        <button type="button" id="camera-update-button-submit" class="btn btn-primary mt-3">UPDATE</button>
                    </form>
                </app-modal-body>
            </app-modal>
        `;
    }
    useTemplate = () => {
        this.props.client.querySelector("button#camera-update-button-open-modal").onclick = () => {
            this.openModal();

        };
    }
    openModal = () => {
        if (this.activeItem) {
            this.modal.open();
            this.props.client.querySelector("input[control='id']").value = this.activeItem.id;
            this.props.client.querySelector("input[control='name']").value = this.activeItem.name;
            this.props.client.querySelector("input[control='image']").value = this.activeItem.image;
            this.props.client.querySelector("input[control='megapixel']").value = this.activeItem.megapixel;
            this.props.client.querySelector("input[control='price']").value = this.activeItem.price;
            this.props.client.querySelector("input[control='url']").value = this.activeItem.url;
            this.props.client.querySelector("select[control='brandId']").value = this.activeItem.brandId;
            this.props.client.querySelector("select[control='categoryId']").value = this.activeItem.categoryId;
            this.form = this.props.client.querySelector("form#camera-update-form");
            this.props.client.querySelector("button#camera-update-button-submit").onclick = () => {
                this.useRequest();
            };
        }
    }
    closeModal = () => {
        this.modal.close();
    }
    useRequest = () => {
        const controls = [...this.form.querySelectorAll("div.form-group input.form-control"), ...this.form.querySelectorAll("div.form-group select.form-control")];
        service.update(Camera.getData(controls, true))
                .then(async (res) => {
                    this.closeModal();
                    this.props.useRefesh();
                    await SwalComponent.show("MESSAGE", "UPDATE SUCCESS!", "success");
                }).catch((err) => {
                    SwalComponent.show("MESSAGE", "UPDATE FAIL!", "danger");
                });
    }
}