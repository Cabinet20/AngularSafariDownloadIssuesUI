import {
    Http, Request, RequestOptionsArgs, Response,
    XHRBackend, RequestOptions, ConnectionBackend, Headers
} from '@angular/http';
import { Router } from '@angular/router';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
// import 'rxjs/add/observable/empty';
// import 'rxjs/add/operator/retry';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

export class AuthInterceptor extends Http {

    constructor(backend: ConnectionBackend,
        defaultOptions: RequestOptions, private _router: Router) {
        super(backend, defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.request(url, options));
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        debugger;
        return this.intercept(super.get(url, this.getRequestOptionArgs(options)));
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.post(url, this.getRequestOptionArgs(options)));
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.delete(url, this.getRequestOptionArgs(options)));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.delete(url, this.getRequestOptionArgs(options)));
    }

    getRequestOptionArgs(options: RequestOptionsArgs): RequestOptionsArgs {
        options.headers.append('Application', `SafariDemo`);
        options.headers.append('Instance', 'DownloadIssues');

        options.headers.append('Content-Type', 'application/json');
        return options;
    }

    intercept(observable: Observable<Response>): Observable<Response> {
        return observable;
    }
}
