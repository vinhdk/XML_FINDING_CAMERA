import { HttpService } from '../share/services/http.service.js';
import { environment } from '../../environments/environment.js';
export class CameraService {
    
    static getAll = () => {
        return HttpService.GET(`${environment.endPoint}${environment.apiPath.camera.main}`);
    }
    static getById = (id) => {
        return HttpService.GET(`${environment.endPoint}${environment.apiPath.camera.getById}${id}`);
    }

    static insert = (data) => {
        return HttpService.POST(`${environment.endPoint}${environment.apiPath.camera.getById}XML`, data);
    }

    static update = (data) => {
        return HttpService.PUT(`${environment.endPoint}${environment.apiPath.camera.getById}XML`, data);
    }
    
    static remove = (id) => {
        return HttpService.DELETE(`${environment.endPoint}${environment.apiPath.camera.getById}${id}`);
    }

    static removeMany = (ids) => {
        return HttpService.PUT(`${environment.endPoint}${environment.apiPath.camera.getById}DeleteMany`, ids);
    }

    static removeAll = () => {
        return HttpService.DELETE(`${environment.endPoint}${environment.apiPath.camera.getById}All`);
    }

}