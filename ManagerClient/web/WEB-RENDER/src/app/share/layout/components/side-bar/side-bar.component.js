import {environment} from '../../../../../environments/environment.js';
import {AuthService as service} from '../../../../services/auth.service.js';
export class SideBarComponent {
    constructor(props) {
        this.props = props;
        this.init();
    }
    init = async (props) => {
        await service.getMenu().then((res) => {
            const dom = new DOMParser().parseFromString(res, "application/xml");
            this.menu = environment.menu.filter((item) => {
                return dom.querySelector("role").attributes.getNamedItem(item.check).value === "true";
            });
            this.render();
            this.useTemplate();
        });
    }
    render = () => {
        this.props.client.innerHTML = `
                <link rel="stylesheet" href="WEB-RENDER/src/app/share/layout/components/side-bar/side-bar.component.scss" />
                <div onclick="document.location.href = 'MainController?URL=DASHBOARD'" class="side-bar-logo mb-5 pointer pt-4">
                    <div class="text-center">
                        <h1 class="brand">VFC</h1>
                    </div>
                </div>
                <div class="side-bar-menu mt-5">
                    <div class="menu">
                        ${this.useContent()}
                    </div>
                </div>
            `;
    }
    useContent = () => {
        let content = "";
        this.menu.forEach((item) => content +=
                    `<div class="menu-item" data="${item.data}">
                        <div class="row mb-0 pointer item ${this.props.name === item.data ? "select" : ""}">
                            <div class="col-4 text-right px-3">
                                <img src="${item.icon}" width="35" />
                            </div>
                            <div class="col-8 align-self-center">
                                <span style="font-family:cursive;">${item.title}</span>
                            </div>
                        </div>
                    </div>
        `);
        return content;
    }
    useTemplate = () => {
        [...this.props.client.querySelectorAll(".menu-item")].forEach((item) => {
            item.onclick = () => {
                this.useRedirect(item.getAttribute("data"));
            };
        });
    }
    useRedirect = (data) => {
        document.location.href = "MainController?URL=" + data;
    }
}