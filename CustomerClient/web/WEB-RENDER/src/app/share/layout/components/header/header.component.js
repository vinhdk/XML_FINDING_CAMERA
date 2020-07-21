import {environment} from '../../../../../environments/environment.js';
export class HeaderComponent {
    constructor(props) {
        this.props = props;
        this.init();
    }

    init = () => {
        this.render();
        this.useTemplate();
    }

    render = () => {
        this.props.client.innerHTML = `
            <link rel="stylesheet" href="WEB-RENDER/src/app/share/layout/components/header/header.component.scss" />
            <div class="row card header">
                <div class="col-1 pl-3">
                    <img src="WEB-RENDER/src/assets/logo.png" style="width: 6rem"/>
                </div>
                <div class="col-10 text-center align-self-center">
                    <ul class="p-0 menu" style="list-style-type: none; display: -webkit-inline-box">
                        ${this.useContent()}
                    </ul>
                </div>
                <div class="col-1 pr-3 text-right align-self-center">
                    
                </div>
            </div>
        `;
    }
    useContent = () => {
        let content = "";
        environment.menu.forEach((item) => content += `
                    <li class="mr-3 menu-item" style="width: 13rem;" data="${item.data}">
                        <div class="item w-100-per p-3 ${this.name === item.data ? "select" : ""}" style="display: inline-flex">
                            <img src="${item.icon}" width="35" />
                            <div class="align-self-center mx-3 text-center" style="width: inherit">
                                <b style="font-family:cursive;">${item.title}</b>
                            </div>
                        </div>
                    </li>
        `);
        return content;
    }
    useTemplate = () => {
        [...this.props.client.querySelectorAll("li")].forEach((item) => {
            item.onclick = () => {
                this.goToPage(item.getAttribute("data"));
            };
        });
    }
    goToPage = (data) => {
        document.location.href = "MainController?URL=" + data;
    }
}