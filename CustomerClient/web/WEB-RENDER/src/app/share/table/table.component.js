import {PaginationComponent} from './components/pagination/pagination.component.js';
import {SelectComponent} from './components/select/select.component.js';
import {environment} from '../../../environments/environment.js';
export class TableComponent {
    constructor(props) {
        this.props = props;
        this.active = -1;
        this.headers = environment.table[props.name];
        this.useChange();
    }

    useChange = () => {
        this.render();
        this.renderTable(1, 16);
        this.selectComponent = new SelectComponent({
            selector: 'app-select',
            client: this.props.client.querySelector('app-select'),
            father: this
            ,
            useRefesh: () => {
                this.paginationComponent.refeshPaging();
                this.paginationComponent.useChange();
            },
            count: this.props.rows.length
        });
        this.paginationComponent = new PaginationComponent({
            selector: 'app-pagination',
            client: this.props.client.querySelector('app-pagination'),
            father: this,
            useRefesh: (index, value) => {
                this.renderTable(index, value);
                this.useTemplate();
            },
            count: this.props.rows.length
        });
        ;

    }
    render = () => {
        this.props.client.innerHTML = `
            <link rel="stylesheet" href="WEB-RENDER/src/app/share/table/table.component.scss" />
            <div class="row card h-70 bg-white radius-top-10">
                <div class="col-12 pr-5 pl-4 " style="overflow-y: auto">
                    <div id="table-component" class="table-row h-100-per">

                    </div>
                </div>
            </div>
            <div class="row card h-10 bg-white radius-bottom-10 align-items-center">
                <div class="col-1 text-center">
                    <app-select></app-select>
                </div>
                <div class="col-10 text-center">
                    <app-pagination></app-pagination>
                </div>
                <div class="col-1">
                    <span class="w-100-per"></span>
                </div>
            </div>
        `;
    }
    renderTable = (index, value) => {
        const table = this.props.client.querySelector("#table-component");
        table.innerHTML = `
                ${this.useRows(index, value)}
        `;
        this.useTemplate();
    }
    useRows = (index, value) => {
        let content = "";
        let min = 0;
        let max = this.props.rows.length;
        if (this.props.rows.length > value) {
            if (index * value > this.props.rows.length) {
                max = this.props.rows.length;
                min = max - (this.props.rows.length % value);
            } else {
                max = index * value;
                min = max - value;
            }
        }
        for (let i = min; i < max; i++) {
            const row = this.props.rows[i];
            content += `
                        <div id="${row.id}" class="col-3 h-50 mb-3 pointer item" style="border: 1px #a2a2a2 solid;">
                            <div class="item-body h-80-per text-center">
                                <img src="${row.image}" title="${row.name}" style="width: 200px; height: 200px"/>
                                <div class="name px-5 h-15-per">
                                    <span>${row.name}</span>
                                </div>
                                <div class="price">
                                    <span>€ ${row.price}</span>
                                </div>
                                ${row.megapixel ? `<div class="megapixel">
                                    <span>MP: ${row.megapixel}</span>
                                </div>` : ""}
                            </div>
                            <div class="item-footer h-20-per text-center">
                                <img width="50" src="${row.megapixel ? `WEB-RENDER/src/assets/menu/camera.png` : `WEB-RENDER/src/assets/menu/card.png`}"/>
                            </div>
                        </div>
                    `;
        }
        return content;
    }

    useTemplate = () => {
        this.props.client.querySelectorAll("div.item").forEach((e) => {
            e.onclick = () => {
                window.open(this.props.rows.find((row) => row.id === e.getAttribute("id")).url, "_blank");
            };
        });
    }
}