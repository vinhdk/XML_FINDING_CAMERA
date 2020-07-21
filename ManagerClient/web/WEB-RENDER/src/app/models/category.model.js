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

static getData = (controls, update) => {
        let content = update ? "<categoryJAXB xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns='http://xml.netbeans.org/schema/category' xsi:schemaLocation='http://xml.netbeans.org/schema/category category.xsd' " : "<category ";
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