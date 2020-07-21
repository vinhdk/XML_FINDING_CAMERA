export class Category {
    constructor(category) {
        this.id = category.id;
        this.name = category.name;
    }

    static newCategory = (node) => {
        return new Category({
            id: node.getAttribute('id'),
            name: node.getAttribute('name')
        });
    }

    static getData = (controls) => {
        let content = "<category ";
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