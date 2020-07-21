export class Account {
    constructor(account) {
        this.id = account.id;
        this.roleName = account.roleName;
        this.fullname = account.fullname;
        this.password = account.password;
        this.phone = account.phone;
        this.email = account.email;
        this.roleId = account.roleId;
        this.avatar = account.avatar;
        this.address = account.address;
    }

    static newAccount = (node) => {
        return new Account({
            id: node.getAttribute('username'),
            fullname: node.getAttribute('fullname'),
            password: node.getAttribute('password'),
            phone: node.getAttribute('phone'),
            email: node.getAttribute('email'),
            roleId: node.getAttribute('roleId'),
            roleName: node.getAttribute('roleName'),
            address: node.getAttribute('address')
        });
    }

    static getData = (controls, update) => {
        let content = update ? "<accountJAXB xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns='http://xml.netbeans.org/schema/account' xsi:schemaLocation='http://xml.netbeans.org/schema/account account.xsd' " : "<account ";
        controls.forEach((control) => {
            if (control.getAttribute("control")) {
                content += `${control.getAttribute("control") === 'id' ? 'username' : control.getAttribute("control")}="${control.value}" `;
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