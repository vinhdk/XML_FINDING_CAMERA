export class PaginationComponent {
    constructor(props) {
        this.props = props;
        this.init();
        this.refeshPaging();
        this.useChange();
    }

    init = () => {
        this.render();
    }
    render = () => {
        this.props.client.innerHTML = `
            <ul class="p-0" style="list-style-type: none; display: -webkit-inline-box">
                <li class="mr-3"><button id="previous" style="width: 6rem" class="btn btn-primary">Previous</button></li>
                <items></items>
                <li><button id="next" style="width: 6rem" class="btn btn-primary">Next</button></li>
            </ul>
        `;
    }
    useChange = () => {
        this.props.useRefesh(this.index, this.props.father.selectComponent.value);
        this.props.client.querySelector("items").innerHTML = this.useContent();
        this.useTemplate();
    }
    useTemplate = () => {
        this.props.client.querySelector("#previous").onclick = () => {
            this.usePrevious();
        };
        this.props.client.querySelector("#next").onclick = () => {
            this.useNext();
        };
        [...this.props.client.querySelectorAll(".btn-item")].forEach((item) => {
            item.onclick = () => {
                this.useIndex(parseInt(item.getAttribute("data")));
            };
        });

    }
    useNext = () => {
        if (this.index < this.useCount()) {
            this.index += 1;
            if (this.index > this.max) {
                this.min += 1;
                this.max += 1;
            }
            this.useChange();
        }
    }
    usePrevious = () => {
        if (this.index > 1) {
            this.index -= 1;
            if (this.index < this.min) {
                this.min -= 1;
                this.max -= 1;
            }
            this.useChange();
        }
    }
    useIndex = (index) => {
        console.log(index);
        if (this.index !== index) {
            this.index = index;
            this.useChange();
        }
    }
    useItem = () => {
        const arr = [];
        for (let i = this.min; i <= this.max; i++) {
            arr.push({label: i, value: i});
        }
        return arr;
    }
    useCount = () => {
        return parseInt((this.props.count / this.props.father.selectComponent.value)) + (this.props.count % this.props.father.selectComponent.value === 0 ? 0 : 1);
    }
    useContent = () => {
        let content = "";
        this.useItem().forEach((item, i) => content +=
                    `
                    <li class="mr-3" style="float: left"><button style="width: 6rem" data="${item.value}" class="btn btn-item btn-primary ${this.index === item.value ? 'active' : ''}">${item.label}</button></li>
                `);
        return content;
    }
    refeshPaging = () => {
        this.index = 1;
        this.min = 1;
        this.max = this.useCount() > 5 ? 5 : this.useCount();
    }

}