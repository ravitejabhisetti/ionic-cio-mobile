import { Http, XHRBackend, RequestOptions } from '@angular/http';
import { CioAppApiService } from './cio-app-api-services';
import * as constants from '../core/cio-constants';

export function createCioAppApi(
    xhrBackend: XHRBackend,
    requestOptions: RequestOptions) {
    const ngHttp = new Http(xhrBackend, requestOptions);
    const baseUrl = constants.firebaseUrl;
    return new CioAppApiService(ngHttp, baseUrl);
}