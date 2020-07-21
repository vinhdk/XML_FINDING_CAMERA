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
                <div class="col-7"></div>
                <div class="col-3 pr-3 text-right align-self-center">
                    <span style="font-size: 2rem; text-transform: uppercase; font-family: cursive;">${localStorage.getItem("username")}</span>
                </div>
                <div class="col-1 pr-3 text-right align-self-center">
                    <button id="sign-out" class="btn btn-primary">SIGN OUT</button>
                </div>
            </div>
        `;
    }
    useTemplate = () => {
        this.props.client.querySelector("#sign-out").onclick = () => {
            this.useSignout();
        };
    }
    useSignout = () => {
        localStorage.clear();
        document.location.href = "MainController";
    }
}