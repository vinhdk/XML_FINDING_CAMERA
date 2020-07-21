export class Camera {
    constructor(camera) {
        this.id = camera.id;
        this.name = camera.name;
        this.image = camera.image;
        this.url = camera.url;
        this.price = camera.price;
        this.megapixel = camera.megapixel;
        this.brandId = camera.brandId;
        this.categoryId = camera.categoryId;
    }

    static newCamera = (node) => {
        return new Camera({
            id: node.getAttribute('id'),
            name: node.getAttribute('name'),
            image: node.getAttribute('image'),
            url: node.getAttribute('url'),
            price: Camera.numberWithCommas(parseFloat(node.getAttribute('price')).toFixed(2)),
            megapixel: parseFloat(node.getAttribute('megapixel')).toFixed(2),
            brandId: node.getAttribute('brandId'),
            categoryId: node.getAttribute('categoryId')
        });
    }

    static getData = (controls) => {
        let content = "<camera ";
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