import {LayoutComponent} from '../../share/layout/layout.component.js';
export class DashboardModule {
    constructor() {
        this.layout = new LayoutComponent("DASHBOARD");
    }
}
window.dashboardModule = new DashboardModule();