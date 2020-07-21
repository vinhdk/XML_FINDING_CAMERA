export class Role {
    constructor(role) {
        this.id = role.id;
        this.name = role.name;
    }

    static newRole = (node) => {
        return new Role({
            id: node.getAttribute('id'),
            name: node.getAttribute('name')
        });
    }

    static getData = (controls) => {
        let content = "<role ";
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