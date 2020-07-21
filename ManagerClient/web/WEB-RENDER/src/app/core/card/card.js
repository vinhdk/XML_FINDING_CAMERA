import {CardService as service} from '../../services/card.service.js';
import {CapacityService as capacityService} from '../../services/capacity.service.js';
import {Card} from '../../models/card.model.js';
import {Capacity} from '../../models/capacity.model.js';
import {CardListComponent} from './components/card-list/card-list.component.js';
import {CardCreateComponent} from './components/card-create/card-create.component.js';
import {CardUpdateComponent} from './components/card-update/card-update.component.js';
import {LayoutComponent} from '../../share/layout/layout.component.js';
import {SwalComponent} from '../../share/swal/swal.component.js';

export class CardModule {
    constructor() {
        this.init();
    }
    init = async () => {
        await this.useLoad();
        this.layout = new LayoutComponent("CARD");
        this.listComponent = new CardListComponent({
            selector: 'app-card-list',
            client: this.layout.client.querySelector("app-card-list"),
            father: this
        });
        this.updateComponent = new CardUpdateComponent({
            selector: 'app-card-update',
            client: this.layout.client.querySelector("app-card-update"),
            useRefesh: () => {
                this.listComponent.init();
                this.useClear();
            },
            layout: this.layout,
            data: {capacitys: this.capacitys}
        });
        this.createComponent = new CardCreateComponent({
            selector: 'app-card-create',
            client: this.layout.client.querySelector("app-card-create"),
            useRefesh: () => {
                this.listComponent.init();
                this.useClear();
            },
            layout: this.layout,
            data: {capacitys: this.capacitys}
        });

        this.layout.client.querySelector("button#card-delete-button").onclick = () => {
            const ids = [...this.listComponent.tableComponent.props.client.querySelectorAll(".item-checkbox")].filter((checkbox) => checkbox.checked);
            if (ids.length > 0) {
                service.removeMany(Card.getXMLIds(ids.map((e) => e.value)))
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
        await capacityService.getAll()
                .then((res) => {
                    const dom = new DOMParser().parseFromString(res, "application/xml");
                    const nodes = [...dom.getElementsByTagName('capacity')];
                    this.capacitys = nodes.map((node) => Capacity.newCapacity(node));
                }).catch((err) => console.log(err));
    }
    useTemplate = () => {
        this.searchData = {
            name: "",
            toPrice: undefined,
            fromPrice: undefined,
            capacityId: undefined
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
                <div class="form-group float-left w-100-per m-auto">
                    <label>CAPACITY</label>
                    <select class="form-control" name="capacityId" placholder="SELECT CAPACITY">
                        <option disabled selected>SELECT CAPACITY</option>
                ${this.capacitys.map((capacity) =>
                `<option value="${capacity.id}">${capacity.name}</option>`
        )}
                    </select>
                </div>
            </div>
        `;
        const name = this.layout.client.querySelector("input[name='name']");
        const toPrice = this.layout.client.querySelector("input[name='toPrice']");
        const fromPrice = this.layout.client.querySelector("input[name='fromPrice']");
        const capacityId = this.layout.client.querySelector("select[name='capacityId']");
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
        capacityId.onchange = (event) => {
            this.searchData.capacityId = event.target.value;
            this.listComponent.useFilter(this.searchData);
        };
    }
    useClear = () => {
        this.layout.client.querySelector("input[name='name']").value = "";
    }
}
window.cardModule = new CardModule();