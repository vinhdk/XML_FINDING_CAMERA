import { HttpService } from '../share/services/http.service.js';
import { environment } from '../../environments/environment.js';
export class AuthService {
    static login = (data) => {
        return HttpService.POST(`${environment.endPoint}${environment.apiPath.auth.main}/Login`, data);
    }
    static getMenu = () => {
        return HttpService.GET(`${environment.endPoint}${environment.apiPath.auth.main}/Menu/${localStorage.getItem("username")}`);
    }

    static authorize = (URL) => {
        return HttpService.GET(`${environment.endPoint}${environment.apiPath.auth.main}/${localStorage.getItem("username")}/${URL}`);
    }
}