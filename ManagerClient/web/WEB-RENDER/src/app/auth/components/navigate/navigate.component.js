import {AuthService as service} from '../../../services/auth.service.js';
export class NavigateComponent {
    constructor(props) {
        this.props = props;
        this.init();
    }

    init = () => {
        this.render();
    }
    render = () => {
        this.props.client.innerHTML = `
            <link rel="stylesheet" href="WEB-RENDER/src/app/auth/components/navigate/navigate.component.scss"/>
            <div id="nb-global-spinner" class="spinner">
                <div class="blob blob-0"></div>
                <div class="blob blob-1"></div>
                <div class="blob blob-2"></div>
                <div class="blob blob-3"></div>
                <div class="blob blob-4"></div>
                <div class="blob blob-5"></div>
            </div>
        `;
    }

    hide = () => {
        this.props.client.style.display = "none";
    }

    show = () => {
        this.props.client.style.display = "block";
    }
}