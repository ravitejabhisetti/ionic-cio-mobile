import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

export interface CioApiResponse {
    data?: any;
    status?: any;
}

export class CioAppApiService {
    constructor(
        private http: Http,
        private baseUrl: string) {
    }

    get(path: string, options?: RequestOptions): Observable<CioApiResponse> {
        return this.http
            .get(this.baseUrl + path, this.processRequestOptions(options))
            .map(this.toCioApiResponse);
    }

    private processRequestOptions = (options?: RequestOptions) => {
        const cioHeaders = new Headers();
        cioHeaders.append('Content-type', 'application/x-www-form-urlencoded');
        cioHeaders.append('Accept', 'application/json');
        return new RequestOptions({ headers: cioHeaders });
    }

    toCioApiResponse(response: any): CioApiResponse {
        return {
            data: response.json()
        }
    }
}