import {AuthService as service} from '../../../services/auth.service.js';
import {SwalComponent} from '../../../share/swal/swal.component.js';

export class LoginComponent {
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
            <link rel="stylesheet" href="WEB-RENDER/src/app/auth/components/login/login.component.scss"/>
            <div class="card centered w-50 h-40 bg-white">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 p-5">
                            <h3 class="text-center font-weight-bold" style="font-size: 2rem" >LOGIN PAGE</h3>
                            <div class="form-group mx-auto">
                                <label>USERNAME</label>
                                <input class="form-control" control="username" type="text"/>
                            </div>
                            <div class="form-group mt-3 mx-auto">
                                <label>PASSWORD</label>
                                <input class="form-control" control="password" type="password"/>
                            </div>
                            <button type="button" id="login-submit" class="btn btn-primary mt-3 w-100-per h-5">LOGIN</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    useTemplate = () => {
        this.props.client.querySelector("#login-submit").onclick = () => {
            const username = this.props.client.querySelector("input[control='username']").value;
            const password = this.props.client.querySelector("input[control='password']").value;
            this.useLogin(username, password);
        };
    }
    useLogin = (username, password) => {
        service.login(`<account username="${username}" password="${password}" />`)
                .then((res) => {
                    console.log(res);
                    if (res !== "") {
                        localStorage.setItem("username", res);
                        this.props.father.useAuthorize();
                    } else {
                        SwalComponent.show("MESSAGE", "USERNAME OR PASSWORD IS WRONG!", "danger");
                    }
                });
    }
    hide = () => {
        this.props.client.style.display = "none";
    }
    show = () => {
        this.props.client.style.display = "block";
    }
}