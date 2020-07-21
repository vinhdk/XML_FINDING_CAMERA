import {LoadingComponent} from '../loading/loading.component.js';

export class LoadingService {

    static showLoading = () => {
        LoadingComponent.show();
    }

    static hideLoading = () => {
        LoadingComponent.hide();
    }
}