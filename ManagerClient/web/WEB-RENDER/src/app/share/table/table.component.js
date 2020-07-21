import {PaginationComponent} from './components/pagination/pagination.component.js';
import {SelectComponent} from './components/select/select.component.js';
import {ActionComponent} from './components/action/action.component.js';
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
        this.renderTable(1, 5);
        this.selectComponent = new SelectComponent({
            selector: 'app-select',
            client: this.props.client.querySelector('app-select'),
            father: this,
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
        this.actionComponent = new ActionComponent({
            selector: 'app-action',
            client: this.props.client.querySelector('app-action'),
            father: this,
            name: this.props.name
        });
    }
    render = () => {
        this.props.client.innerHTML = `
            <link rel="stylesheet" href="WEB-RENDER/src/app/share/table/table.component.scss" />
            <div class="row card h-70 bg-white radius-top-10">
                <div class="col-12 p-4 " style="overflow: hidden">
                    <div id="table-component" class="table w-100-per h-100-per">
                       
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
                <div class="col-1 p-2">
                    <app-action></app-action>
                </div>
            </div>
        `;
    }
    renderTable = (index, value) => {
        const table = this.props.client.querySelector("#table-component");
        table.innerHTML = `
                <div class="thead w-100-per h-8-per">
                    ${this.useHeaders()}
                </div>
                <div class="tbody w-100-per h-92-per">
                    ${this.useRows(index, value)}
                </div>
        `;
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
                        <div id="${row.id}" class="tr${this.active === i ? ' active' : ''}">
                            <div class="td text-center w-5-per"><input class="item-checkbox m-0" value="${row.id}" type="checkbox"/></div>
                            <div class="td text-center w-10-per">${i + 1}</div>
                            ${this.useColumns(row)}
                        </div>
                    `;
        }
        return content;
    }
    useTemplate = () => {
        [...this.props.client.querySelectorAll(".tbody .tr")].forEach((row, i) => {
            row.onclick = () => {
                this.useSelectorItem(i, row);
            };
        });
        this.props.client.querySelector("#all").onclick = () => {
            this.useSelctorAll(this.props.client.querySelector("#all").checked);
        };
    }
    useColumns = (row) => {
        let content = "";
        this.headers.forEach((header, i) => {
            content += `
                        <div class="td text-center w-${header.size}-per" control="${header.key}">${this.useTrim(row[header.key])}</div>
                    `;
        });
        return content;
    }
    useHeaders = () => {
        let content = "";
        this.headers.forEach((header) => {
            content += `
                        <div class="th text-center w-${header.size}-per">${header.label}</div>
                    `;
        });
        return `
            <div class="tr">
                <div class="th text-center w-5-per"><input id="all" class="m-0" type="checkbox"/></div>
                <div class="th text-center w-10-per">No</div>
                ${content}
            </div>
        `;
    }
    useSelectorItem = (index, row) => {
        this.active = index;
        const arrActive = this.props.client.querySelectorAll("div.active");
        if (arrActive.length > 0) {
            arrActive.item(0).className = arrActive.item(0).className.replace("active", "");
        }
        row.className += " active";
        this.props.useChangeItem(this.props.rows.find((e) => e.id === row.id));
    }
    useSelctorAll = (data) => {
        const arrCheckbox = this.props.client.querySelectorAll(".item-checkbox");
        arrCheckbox.forEach((checkbox) => {
            checkbox.checked = data;
        });
    }

    useTrim = (data) => {
        if (data.length > 60) {
            return data.substring(0, 50) + "...";
        }
        return data;
    }
}