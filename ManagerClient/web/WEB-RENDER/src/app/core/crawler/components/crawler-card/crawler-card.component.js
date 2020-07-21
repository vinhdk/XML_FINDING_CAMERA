import {CrawlerService as service} from '../../../../services/crawler.service.js';
export class CrawlerCardComponent {
    constructor(props) {
        this.props = props;
        this.render();
        this.applyCrawler();
    }

    render = () => {
        this.props.client.innerHTML = `
            <button class="w-100-per h-75 radius-50-per pointer" style="outline: none; background: antiquewhite;"><img title="CLICK HERE TO CRAWL CARD" class="w-50-per" src="WEB-RENDER/src/assets/crawler-card.png"/></button>
        `;
    }
    applyCrawler = () => {
        this.props.client.querySelector("button").onclick = async () => {
            const interval = setInterval(() => {
                this.props.client.querySelector("img").style.opacity = 0.4;
                setTimeout(() => {
                    this.props.client.querySelector("img").style.opacity = 1;
                }, 300);
            }, 600);
            await service.crawlerCard().then((res) => {
                clearInterval(interval);
                window.open(document.location.origin + "/ManagerClient/TestController?URL=test-card.jsp", "_blank");
            }).catch((err) => console.log(err));
        };
    }
}