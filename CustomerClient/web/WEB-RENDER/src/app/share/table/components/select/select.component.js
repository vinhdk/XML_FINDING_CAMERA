export class SelectComponent {
    constructor(props) {
        this.props = props;
        this.items = [
            {
                value: 16,
                label: '16'
            },
            {
                value: 32,
                label: '32'
            },
            {
                value: 64,
                label: '64'
            },
            {
                value: 128,
                label: '128'
            },
            {
                value: 256,
                label: '256'
            },
            {
                value: -1,
                label: 'All'
            }
        ];
        this.value = 16;
        this.render();
        this.useTemplate();
    }

    render = () => {
        let content = "";
        this.items.forEach((item) => {
            content += `
                <option value="${item.value}">${item.label}</option>
            `;
        });
        this.props.client.innerHTML = `
              <select class="w-80-per h-4"">
                    ${content}
              </select>
        `;
    }
    useTemplate = () => {
        this.props.client.querySelector("select").onchange = () => {
            this.useChange(this.props.client.querySelector("select").value);
        };
    }
    useChange = (value) => {
        this.value = parseInt(value) === -1 ? this.props.count : value;
        this.props.useRefesh();
    }

}