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
            price: parseFloat(node.getAttribute('price')).toFixed(2),
            megapixel: parseFloat(node.getAttribute('megapixel')).toFixed(2),
            brandId: node.getAttribute('brandId'),
            categoryId: node.getAttribute('categoryId')
        });
    }

static getData = (controls, update) => {
        let content = update ? "<cameraJAXB xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns='http://xml.netbeans.org/schema/camera' xsi:schemaLocation='http://xml.netbeans.org/schema/camera camera.xsd' " : "<camera ";
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
}