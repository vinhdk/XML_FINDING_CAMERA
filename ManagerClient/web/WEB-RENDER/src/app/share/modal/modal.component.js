export class ModalComponent {
    constructor(id) {
        this.client = document.querySelector("app-modal#" + id);
        this.header = this.client.querySelector("app-modal-header");
        this.body = this.client.querySelector("app-modal-body");
        this.render();
        this.useTemplate();

    }

    render = () => {
        this.client.innerHTML = `
            <link rel="stylesheet" href="WEB-RENDER/src/app/share/modal/modal.component.scss" />
            <div class="modal">
                <div class="modal-content">
                    <div class="modal-header">
                        <span class="close">&times;</span>
                        <app-modal-header></app-modal-header>
                    </div>
                    <div class="modal-body mt-3">
                        <app-modal-body></app-modal-body>
                    </div>
                </div>
            </div>
        `;
    }

    useTemplate = () => {
        this.client.querySelector("span.close").onclick = this.close;
    }
    open = () => {
        this.client.querySelector("app-modal-header").innerHTML = this.header.innerHTML;
        this.client.querySelector("app-modal-body").innerHTML = this.body.innerHTML;
        this.client.querySelector("div.modal").style.display = "block";
    }
    close = () => {
        this.client.querySelector("div.modal").style.display = "none";
    }
}