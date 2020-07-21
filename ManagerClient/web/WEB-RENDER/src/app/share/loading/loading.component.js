export class LoadingComponent {

    static show = () => {
        document.body.querySelector("app-loading").style.display = "block";
    }

    static hide = () => {
        document.body.querySelector("app-loading").style.display = "none";
    }
}