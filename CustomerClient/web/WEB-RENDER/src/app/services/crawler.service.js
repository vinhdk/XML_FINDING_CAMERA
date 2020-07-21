import { HttpService } from '../share/services/http.service.js';
import { environment } from '../../environments/environment.js';
export class CrawlerService {

    static crawlerCamera = () => {
        return HttpService.REQUEST(`${environment.apiPath.crawler.main}`, "method=CAMERA");
    }

    static crawlerCard = () => {
        return HttpService.REQUEST(`${environment.apiPath.crawler.main}`, "method=CARD");
    }
}