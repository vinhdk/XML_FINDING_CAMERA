export class SelectComponent {
    constructor(props) {
        this.props = props;
        this.items = [
            {
                value: 5,
                label: '5'
            },
            {
                value: 10,
                label: '10'
            },
            {
                value: 20,
                label: '20'
            },
            {
                value: 50,
                label: '50'
            },
            {
                value: 100,
                label: '100'
            },
            {
                value: -1,
                label: 'All'
            }
        ];
        this.value = 5;
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