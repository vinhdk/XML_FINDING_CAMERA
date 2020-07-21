import {SideBarComponent} from './components/side-bar/side-bar.component.js';
import {MainContentComponent} from './components/main-content/main-content.component.js';
import {HeaderComponent} from './components/header/header.component.js';
export class LayoutComponent {
    constructor(name) {
        this.client = document.querySelector(`app-layout[name='${name}']`);
        this.childs = [...this.client.childNodes];
        this.render();
        this.sidebarComponent = new SideBarComponent({
            selector: 'app-side-bar',
            client: this.client.querySelector('app-side-bar'),
            father: this,
            name: name
        });
        this.headerComponent = new HeaderComponent({
            selector: 'app-header',
            client: this.client.querySelector('app-header'),
            father: this
        });
        this.mainContentComponent = new MainContentComponent({
            selector: 'app-main-content',
            client: this.client.querySelector('app-main-content'),
            father: this,
            childs: this.childs
        });
    }
    render = () => {
        this.client.innerHTML = `
            <link rel="stylesheet" href="WEB-RENDER/src/app/share/layout/layout.component.scss" />
            <div class="container-fluid">
                <div class="row main">
                    <div class="col-2 card side-bar">
                        <app-side-bar></app-side-bar>
                    </div>
                    <div class="col-10" >
                        <app-header></app-header>
                        <app-main-content></app-main-content>
                    </div>
                </div>

            </div>`;
    }
}
