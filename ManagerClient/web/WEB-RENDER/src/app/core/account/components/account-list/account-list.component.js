import {AccountService as service} from '../../../../services/account.service.js';
import {Account} from '../../../../models/account.model.js';
import {TableComponent} from '../../../../share/table/table.component.js';
export class AccountListComponent {
    constructor(props) {
        this.props = props;
        this.init();
    }

    init = async () => {
        await service.getAll()
                .then(async (res) => {
                    const dom = new DOMParser().parseFromString(res, "application/xml");
                    const nodes = [...dom.getElementsByTagName('account')];
                    this.accounts = nodes.map((node) => Account.newAccount(node)).filter((account) => account.roleName !== "Admin");
                    await this.render();
                    this.tableComponent = new TableComponent({
                        selector: 'app-table',
                        client: this.props.client.querySelector('app-table'),
                        father: this,
                        rows: this.accounts,
                        name: 'account',
                        useChangeItem: (activeItem) => {
                            this.props.father.updateComponent.activeItem = activeItem;
                        }});
                })
                .catch((err) => {
                    this.accounts = [];
                });
    }
    render = () => {
        this.props.client.innerHTML = `
            <link rel="stylesheet" src="WEB-RENDER/src/app/core/account/components/account-list/account-list.component.scss" />
            <app-table></app-table>
        `;
    }

    useFilter = (value) => {
        const arr = this.accounts.filter((account) => account.fullname.toLowerCase().includes(value.toLowerCase()));
        this.tableComponent.props.rows = arr;
        this.tableComponent.useChange();
    }

}