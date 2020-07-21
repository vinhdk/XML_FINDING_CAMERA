export class MainContentComponent {
    constructor(props) {
        this.props = props;
        this.render();
    }

    render = () => {
        this.props.client.innerHTML = `
            <link rel="stylesheet" href="WEB-RENDER/src/app/share/layout/components/main-content/main-content.component.scss" />
            <div class="row card main-content">
                <div class="col-12">
                    ${this.useChilds()}
                </div>
            </div>
        `;
    }

    useChilds = () => {
        let content = "";
        this.props.childs.forEach((child) => content += child.outerHTML ? child.outerHTML : "");
        return content;
    }
}