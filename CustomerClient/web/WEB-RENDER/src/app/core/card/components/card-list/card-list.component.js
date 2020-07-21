import {CardService as service} from '../../../../services/card.service.js';
import {Card} from '../../../../models/card.model.js';
import {TableComponent} from '../../../../share/table/table.component.js';
export class CardListComponent {
    constructor(props) {
        this.props = props;
        this.init();
    }

    init = async () => {
        await service.getAll()
                .then((res) => {
                    const dom = new DOMParser().parseFromString(res, "application/xml");
                    const nodes = [...dom.getElementsByTagName('card')];
                    this.cards = nodes.map((node) => Card.newCard(node));
                    this.render();
                    this.tableComponent = new TableComponent({
                        selector: 'app-table',
                        client: this.props.client.querySelector('app-table'),
                        father: this,
                        rows: this.cards,
                        name: 'camera'});
                })
                .catch((err) => {
                    this.cards = [];
                });
    }
    render = () => {
        this.props.client.innerHTML = `
            <link rel="stylesheet" src="WEB-RENDER/src/app/core/card/components/card-list/card-list.component.scss" />
            <app-table></app-table>
        `;
    }

    useFilter = (data) => {
        const arr = this.cards.filter((card) =>
            card.name.toLowerCase().includes(data.name.toLowerCase())
                    && (!data.capacityId || data.capacityId === 'SELECT CAPACITY' ? true : card.capacityId === data.capacityId)
                    && (!data.toPrice || !data.fromPrice ? true : (parseFloat(card.price) >= data.fromPrice && parseFloat(card.price) <= data.toPrice))
        );
        this.tableComponent.props.rows = arr;
        this.tableComponent.useChange();
    }

}