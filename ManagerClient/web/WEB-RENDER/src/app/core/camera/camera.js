import {CameraService as service} from '../../services/camera.service.js';
import {BrandService as brandService} from '../../services/brand.service.js';
import {CategoryService as categoryService} from '../../services/category.service.js';
import {Camera} from '../../models/camera.model.js';
import {Brand} from '../../models/brand.model.js';
import {Category} from '../../models/category.model.js';
import {CameraListComponent} from './components/camera-list/camera-list.component.js';
import {CameraCreateComponent} from './components/camera-create/camera-create.component.js';
import {CameraUpdateComponent} from './components/camera-update/camera-update.component.js';
import {LayoutComponent} from '../../share/layout/layout.component.js';
import {SwalComponent} from '../../share/swal/swal.component.js';

export class CameraModule {
    constructor() {
        this.init();
    }
    init = async () => {
        await this.useLoad();
        this.layout = new LayoutComponent("CAMERA");
        this.listComponent = new CameraListComponent({
            selector: 'app-camera-list',
            client: this.layout.client.querySelector("app-camera-list"),
            father: this
        });
        this.updateComponent = new CameraUpdateComponent({
            selector: 'app-camera-update',
            client: this.layout.client.querySelector("app-camera-update"),
            useRefesh: () => {
                this.listComponent.init();
                this.useClear();
            },
            layout: this.layout,
            data: {brands: this.brands, categorys: this.categorys}
        });
        this.createComponent = new CameraCreateComponent({
            selector: 'app-camera-create',
            client: this.layout.client.querySelector("app-camera-create"),
            useRefesh: () => {
                this.listComponent.init();
                this.useClear();
            },
            layout: this.layout,
            data: {brands: this.brands, categorys: this.categorys}
        });

        this.layout.client.querySelector("button#camera-delete-button").onclick = () => {
            const ids = [...this.listComponent.tableComponent.props.client.querySelectorAll(".item-checkbox")].filter((checkbox) => checkbox.checked);
            if (ids.length > 0) {
                service.removeMany(Camera.getXMLIds(ids.map((e) => e.value)))
                        .then(async (res) => {
                            await this.listComponent.init();
                            this.useClear();
                            SwalComponent.show("MESSAGE", "DELETE SUCCESS!", "success");

                        }).catch((err) => {
                    SwalComponent.show("MESSAGE", "DELETE FAIL!", "danger");
                });
            }
        };
        this.useTemplate();
    }

    useLoad = async () => {
        await brandService.getAll()
                .then((res) => {
                    const dom = new DOMParser().parseFromString(res, "application/xml");
                    const nodes = [...dom.getElementsByTagName('brand')];
                    this.brands = nodes.map((node) => Brand.newBrand(node));
                }).catch((err) => console.log(err));
        await categoryService.getAll()
                .then((res) => {
                    const dom = new DOMParser().parseFromString(res, "application/xml");
                    const nodes = [...dom.getElementsByTagName('category')];
                    this.categorys = nodes.map((node) => Category.newCategory(node));
                }).catch((err) => console.log(err));
    }
    useTemplate = () => {
        this.searchData = {
            name: "",
            toPrice: undefined,
            fromPrice: undefined,
            toMegapixel: undefined,
            fromMegapixel: undefined,
            brandId: undefined,
            categoryId: undefined
        };
        this.layout.client.querySelector("#main-search").innerHTML = `
            <div class="form-group w-100-per m-auto">
                <label>SEARCH BY NAME</label>
                <input class="form-control" type="text" name="name"/>
            </div>
            <div>
                <div class="form-group float-left w-50-per m-auto">
                    <label>FROM PRICE</label>
                    <input class="form-control" type="text" name="fromPrice"/>
                </div>
                <div class="form-group float-left w-50-per m-auto">
                    <label>TO PRICE</label>
                    <input class="form-control" type="text" name="toPrice"/>
                </div>
            </div>
            <div>
                <div class="form-group float-left w-50-per m-auto">
                    <label>FROM MEGAPIXEL</label>
                    <input class="form-control" type="text" name="fromMegapixel"/>
                </div>
                <div class="form-group float-left w-50-per m-auto">
                    <label>TO MEGAPIXEL</label>
                    <input class="form-control" type="text" name="toMegapixel"/>
                </div>
            </div>
            <div>
                <div class="form-group float-left w-50-per m-auto">
                    <label>BRAND</label>
                    <select class="form-control" name="brandId" placholder="SELECT BRAND">
                        <option disabled selected>SELECT BRAND</option>
        ${this.brands.map((brand) =>
                `<option value="${brand.id}">${brand.name}</option>`
        )}
                    </select>
                </div>
                <div class="form-group float-left w-50-per m-auto">
                    <label>CATEGORY</label>
                    <select class="form-control" name="categoryId" placholder="SELECT CATEGORY">
                        <option disabled selected>SELECT CATEGORY</option>
        ${this.categorys.map((category) =>
                `<option value="${category.id}">${category.name}</option>`
        )}
                    </select>
                </div>
            </div>
        `;
        const name = this.layout.client.querySelector("input[name='name']");
        const toPrice = this.layout.client.querySelector("input[name='toPrice']");
        const fromPrice = this.layout.client.querySelector("input[name='fromPrice']");
        const toMegapixel = this.layout.client.querySelector("input[name='toMegapixel']");
        const fromMegapixel = this.layout.client.querySelector("input[name='fromMegapixel']");
        const brandId = this.layout.client.querySelector("select[name='brandId']");
        const categoryId = this.layout.client.querySelector("select[name='categoryId']");
        name.onkeyup = (event) => {
            this.searchData.name = event.target.value;
            this.listComponent.useFilter(this.searchData);
        };
        toPrice.onkeyup = (event) => {
            this.searchData.toPrice = parseFloat(event.target.value);
            this.listComponent.useFilter(this.searchData);
        };
        fromPrice.onkeyup = (event) => {
            this.searchData.fromPrice = parseFloat(event.target.value);
            this.listComponent.useFilter(this.searchData);
        };
        toMegapixel.onkeyup = (event) => {
            this.searchData.toMegapixel = parseFloat(event.target.value);
            this.listComponent.useFilter(this.searchData);
        };
        fromMegapixel.onkeyup = (event) => {
            this.searchData.fromMegapixel = parseFloat(event.target.value);
            this.listComponent.useFilter(this.searchData);
        };
        brandId.onchange = (event) => {
            this.searchData.brandId = event.target.value;
            this.listComponent.useFilter(this.searchData);
        };
        categoryId.onchange = (event) => {
            this.searchData.categoryId = event.target.value;
            this.listComponent.useFilter(this.searchData);
        };
    }
    useClear = () => {
        this.layout.client.querySelector("input[name='name']").value = "";
    }
}
window.cameraModule = new CameraModule();