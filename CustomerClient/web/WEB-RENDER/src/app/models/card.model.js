export class Card {
    constructor(card) {
        this.id = card.id;
        this.name = card.name;
        this.image = card.image;
        this.url = card.url;
        this.price = card.price;
        this.capacityId = card.capacityId;
    }

    static newCard = (node) => {
        return new Card({
            id: node.getAttribute('id'),
            name: node.getAttribute('name'),
            image: node.getAttribute('image'),
            url: node.getAttribute('url'),
            price: Card.numberWithCommas(parseFloat(node.getAttribute('price')).toFixed(2)),
            capacityId: node.getAttribute('capacityId')
        });
    }

    static getData = (controls) => {
        let content = "<card ";
        controls.forEach((control) => {
            if (control.getAttribute("control")) {
                content += `${control.getAttribute("control")}="${control.value}" `;
            }
        });
        return content + "/>";
    }

    static getModel = (controls) => {
        const model = {};
        controls.forEach((control) => {
            if (control.getAttribute("control")) {
                model[control.getAttribute("control")] = control.value;
            }
        });
        return model;
    }

    static getXMLIds = (ids) => {
        let xml = "<ids>";
        ids.forEach((id) => xml += `<id>${id}</id>`);
        return xml + "</ids>";
    }

    static numberWithCommas = (value) => {
        var parts = value.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }
}