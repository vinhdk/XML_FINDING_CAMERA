export class ActionComponent {
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
            <button id="pdf" class="btn btn-default"><img src="WEB-RENDER/src/assets/actions/pdf.png"/></button>
            <button id="xml" class="btn btn-default"><img src="WEB-RENDER/src/assets/actions/xml.png"/></button>
        `;
    }
    useTemplate = () => {
        this.props.client.querySelector("#pdf").onclick = this.downloadPDF;
        this.props.client.querySelector("#xml").onclick = this.downloadXML;
    }

    downloadPDF = () => {
        window.open(document.location.origin + `/ManagerClient/PDFController?URL=${this.props.name.toUpperCase()}`, "_blank");
    }

    downloadXML = () => {
        window.open(document.location.origin + `/ManagerClient/XMLController?URL=${this.props.name.toUpperCase()}`, "_blank");
    }
}