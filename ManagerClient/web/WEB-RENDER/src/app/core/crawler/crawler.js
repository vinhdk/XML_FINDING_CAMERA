import {LayoutComponent} from '../../share/layout/layout.component.js';
import {CrawlerCameraComponent} from './components/crawler-camera/crawler-camera.component.js';
import {CrawlerCardComponent} from './components/crawler-card/crawler-card.component.js';
export class CrawlerModule {
    constructor() {
        this.init();
    }
    init = () => {
        this.layout = new LayoutComponent("CRAWLER");
        this.cameraComponent = new CrawlerCameraComponent({
            selector: 'app-crawler-camera',
            client: this.layout.client.querySelector("app-crawler-camera"),
            father: this
        });
        this.cardComponent = new CrawlerCardComponent({
            selector: 'app-crawler-card',
            client: this.layout.client.querySelector("app-crawler-card"),
            father: this
        });
    }
}
window.crawlerModule = new CrawlerModule();