export class Role {
    constructor(role) {
        this.id = role.id;
        this.name = role.name;
        this.canActiveAccount = role.canActiveAccount;
        this.canActiveRole = role.canActiveRole;
        this.canActiveBrand = role.canActiveBrand;
        this.canActiveCategory = role.canActiveCategory;
        this.canActiveCapacity = role.canActiveCapacity;
        this.canActiveCamera = role.canActiveCamera;
        this.canActiveCard = role.canActiveCard;
        this.canActiveCrawler = role.canActiveCrawler;
    }

    static newRole = (node) => {
        return new Role({
            id: node.getAttribute('id'),
            name: node.getAttribute('name'),
            canActiveAccount: node.getAttribute('canActiveAccount'),
            canActiveRole: node.getAttribute('canActiveRole'),
            canActiveBrand: node.getAttribute('canActiveBrand'),
            canActiveCategory: node.getAttribute('canActiveCategory'),
            canActiveCapacity: node.getAttribute('canActiveCapacity'),
            canActiveCamera: node.getAttribute('canActiveCamera'),
            canActiveCard: node.getAttribute('canActiveCard'),
            canActiveCrawler: node.getAttribute('canActiveCrawler')
        });
    }

    static getData = (controls, update) => {
        let content = update ? "<roleJAXB xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns='http://xml.netbeans.org/schema/role' xsi:schemaLocation='http://xml.netbeans.org/schema/role role.xsd' " : "<role ";
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