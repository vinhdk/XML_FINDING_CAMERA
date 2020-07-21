export class Capacity {
    constructor(capacity) {
        this.id = capacity.id;
        this.name = capacity.name;
    }

    static newCapacity = (node) => {
        return new Capacity({
            id: node.getAttribute('id'),
            name: node.getAttribute('name')
        });
    }

    static getData = (controls) => {
        let content = "<capacity ";
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