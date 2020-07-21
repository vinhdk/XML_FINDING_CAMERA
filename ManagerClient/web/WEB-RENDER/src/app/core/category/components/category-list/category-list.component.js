import {CategoryService as service} from '../../../../services/category.service.js';
import {Category} from '../../../../models/category.model.js';
import {TableComponent} from '../../../../share/table/table.component.js';
export class CategoryListComponent {
    constructor(props) {
        this.props = props;
        this.init();
    }

    init = async () => {
        await service.getAll()
                .then(async (res) => {
                    const dom = new DOMParser().parseFromString(res, "application/xml");
                    const nodes = [...dom.getElementsByTagName('category')];
                    this.categorys = nodes.map((node) => Category.newCategory(node));
                    await this.render();
                    this.tableComponent = new TableComponent({
                        selector: 'app-table',
                        client: this.props.client.querySelector('app-table'),
                        father: this,
                        rows: this.categorys,
                        name: 'category',
                        useChangeItem: (activeItem) => {
                            this.props.father.updateComponent.activeItem = activeItem;
                        }});
                })
                .catch((err) => {
                    this.categorys = [];
                });
    }
    render = () => {
        this.props.client.innerHTML = `
            <link rel="stylesheet" src="WEB-RENDER/src/app/core/category/components/category-list/category-list.component.scss" />
            <app-table></app-table>
        `;
    }

    useFilter = (value) => {
        const arr = this.categorys.filter((category) => category.name.toLowerCase().includes(value.toLowerCase()));
        this.tableComponent.props.rows = arr;
        this.tableComponent.useChange();
    }

}