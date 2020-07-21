export class Brand {
    constructor(brand) {
        this.id = brand.id;
        this.name = brand.name;
    }

    static newBrand = (node) => {
        return new Brand({
            id: node.getAttribute('id'),
            name: node.getAttribute('name')
        });
    }
    static getData = (controls) => {
        let content = "<brand ";
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