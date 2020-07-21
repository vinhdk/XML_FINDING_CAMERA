import { HttpService } from '../share/services/http.service.js';
import { environment } from '../../environments/environment.js';
export class AccountService {

    static getAll = () => {
        return HttpService.GET(`${environment.endPoint}${environment.apiPath.account.main}`);
    }
    static getById = (id) => {
        return HttpService.GET(`${environment.endPoint}${environment.apiPath.account.getById}${id}`);
    }

    static insert = (data) => {
        return HttpService.POST(`${environment.endPoint}${environment.apiPath.account.getById}XML`, data);
    }

    static update = (data) => {
        return HttpService.PUT(`${environment.endPoint}${environment.apiPath.account.getById}XML`, data);
    }
    
    static remove = (id) => {
        return HttpService.DELETE(`${environment.endPoint}${environment.apiPath.account.getById}${id}`);
    }

    static removeMany = (ids) => {
        return HttpService.PUT(`${environment.endPoint}${environment.apiPath.account.getById}DeleteMany`, ids);
    }

    static removeAll = () => {
        return HttpService.DELETE(`${environment.endPoint}${environment.apiPath.account.getById}All`);
    }
}