import {CameraService as service} from '../../services/camera.service.js';
import {CalculatorService as calculatorService} from '../../services/calculator.service.js';
import {BrandService as brandService} from '../../services/brand.service.js';
import {CategoryService as categoryService} from '../../services/category.service.js';
import {Camera} from '../../models/camera.model.js';
import {Brand} from '../../models/brand.model.js';
import {Category} from '../../models/category.model.js';
import {CameraListComponent} from './components/camera-list/camera-list.component.js';
import {LayoutComponent} from '../../share/layout/layout.component.js';
import {LoadingService} from '../../share/services/loading.service.js';
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
            categoryId: undefined,
            ratio: 1,
            size: 300,
            dpi: 250

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
                <div class="form-group float-left w-100-per m-auto">
                    <label>BRAND</label>
                    <select class="form-control" name="brandId" placholder="SELECT BRAND">
                        <option disabled selected>SELECT BRAND</option>
        ${this.brands.map((brand) =>
                `<option value="${brand.id}">${brand.name}</option>`
        )}
                    </select>
                </div>
            </div>
            <div>
                <div class="form-group float-left w-100-per m-auto">
                    <label>CATEGORY</label>
                    <select class="form-control" name="categoryId" placholder="SELECT CATEGORY">
                        <option disabled selected>SELECT CATEGORY</option>
        ${this.categorys.map((category) =>
                `<option value="${category.id}">${category.name}</option>`
        )}
                    </select>
                </div>
            </div>
            <button id="collapsible" onclick="toggle(this)" class="collapsible mt-3">PRO SEARCH</button>
            <div class="content">
                <div class="form-group w-100-per m-auto">
                    <label>SIZE (MILIMET)</label>
                    <input value="300" class="form-control" type="number" name="size"/>
                </div>
                <div class="form-group w-100-per m-auto">
                    <label>RATIO</label>
                    <select value="1" class="form-control" name="ratio">
                        <option value="1" selected>1:1</option>
                        <option value="1.5">3.2</option>
                        <option value="1.3333333333">4.3</option>
                    </select>
                </div>
                <div class="form-group w-100-per m-auto">
                    <label>DPI</label>
                    <input value="250" min="1" class="form-control" type="number" name="dpi"/>
                </div>
                <button id="calculate" class="btn btn-primary w-100-per mt-3">CALCULATE</button>
            </div>
        `;
        this.toggleButton = this.layout.client.querySelector("#collapsible");
        this.toggleButton.onclick = () => {
            this.toggleButton.classList.toggle("active-colap");
            this.listComponent.useFilter(this.searchData);
            const content = this.toggleButton.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        };
        const name = this.layout.client.querySelector("input[name='name']");
        const toPrice = this.layout.client.querySelector("input[name='toPrice']");
        const fromPrice = this.layout.client.querySelector("input[name='fromPrice']");
        const toMegapixel = this.layout.client.querySelector("input[name='toMegapixel']");
        const fromMegapixel = this.layout.client.querySelector("input[name='fromMegapixel']");
        const brandId = this.layout.client.querySelector("select[name='brandId']");
        const categoryId = this.layout.client.querySelector("select[name='categoryId']");

        const dpi = this.layout.client.querySelector("input[name='dpi']");
        const size = this.layout.client.querySelector("input[name='size']");
        const ratio = this.layout.client.querySelector("select[name='ratio']");

        const calculate = this.layout.client.querySelector("#calculate");
        calculate.onclick = () => {
            LoadingService.showLoading();
            setTimeout(() => {
                const value = parseFloat(calculatorService.calc(this.searchData.size, parseFloat(this.searchData.ratio), this.searchData.dpi));
                this.listComponent.programing(value, this.searchData);
                LoadingService.hideLoading();
            }, 3000);
        };
        size.onkeyup = (event) => {
            this.searchData.size = parseFloat(event.target.value);
        };
        dpi.onkeyup = (event) => {
            this.searchData.dpi = parseFloat(event.target.value);
        };
        ratio.onchange = (event) => {
            this.searchData.ratio = event.target.value;
        };
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
}
window.cameraModule = new CameraModule();