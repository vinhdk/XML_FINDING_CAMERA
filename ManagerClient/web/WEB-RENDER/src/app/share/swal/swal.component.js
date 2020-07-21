import {environment} from '../../../environments/environment.js';
export class SwalComponent {

    constructor() {

    }
    static show = (title, message, type) => {
        const swal = document.createElement("app-swal");
        swal.innerHTML = `
            <link rel="stylesheet" href="WEB-RENDER/src/app/share/swal/swal.component.scss" />
            <div class="swal">
                <div class="card centered w-30 h-40 bg-white text-center p-5">
                    <div class="icon h-40-per">
                        <img src="${environment.swal[type].icon}" width="100"/>
                    </div>
                    <div class="content h-40-per">
                        <p style="font-size: 1.5rem"><b>${title}</b></p>
                        <span>${message}</span>
                    </div>
                    <div class="actions h-20-per">
                        <button class="${environment.swal[type].btnClass} h-100-per w-20-per radius-5">OK</button>
                    </div>
                </div>
            </div>
`;
        swal.querySelector("button").onclick = () => {
            document.body.removeChild(document.body.querySelector("app-swal"));
        };
        document.body.appendChild(swal);
    }
}