import { HttpService } from '../share/services/http.service.js';
export class GlobalService {
    static goTo = (DATA) => {
        HttpService.REQUEST("MainController", DATA);
    }
}