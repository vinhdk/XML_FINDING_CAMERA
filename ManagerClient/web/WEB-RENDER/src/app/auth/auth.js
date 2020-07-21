import {LoginComponent} from './components/login/login.component.js';
import {NavigateComponent} from './components/navigate/navigate.component.js';
import {AuthService as service} from '../services/auth.service.js';
export class AuthModule {
    constructor() {
        this.init();
    }

    init = () => {
        this.render();
        this.useAuthorize();
    }
    render = () => {
        this.loginComponent = new LoginComponent({
            selector: 'app-login',
            client: document.querySelector('app-login'),
            father: this
        });
        this.navigateComponent = new NavigateComponent({
            selector: 'app-navigate',
            client: document.querySelector('app-navigate'),
            father: this
        });
    }
    useAuthorize = () => {
        this.loginComponent.hide();
        this.navigateComponent.show();
        setTimeout(() => {
            if (localStorage.getItem("username")) {
                const check = document.location.search.includes('URL');
                if (check) {
                    const URL = document.location.search.includes('?reload=true') ? document.location.search.replace('?reload=true&URL=', '') : document.location.search.replace('?URL=', '');
                    if (URL.includes("DASHBOARD")) {
                        document.location.href = "MainController?reload=true&URL=DASHBOARD";
                    } else {
                        service.authorize(URL)
                                .then((res) => {
                                    if (res === "can") {
                                        document.location.href = "MainController?reload=true&URL=" + URL;
                                    } else if (check === "can not") {
                                        document.location.href = "MainController?reload=true&URL=DASHBOARD";
                                    } else {
                                        this.loginComponent.show();
                                        this.navigateComponent.hide();

                                    }
                                }).catch((err) => console.log(err));
                    }
                } else {
                    document.location.href = "MainController?reload=true";
                }

            } else {
                this.loginComponent.show();
                this.navigateComponent.hide();
            }
        }, 1000);
    }
}
window.authModule = new AuthModule();