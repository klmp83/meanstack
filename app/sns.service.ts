import {Injectable} from 'angular2/core';
import {Headers, RequestOptions, Http, Response} from 'angular2/http';
import {Observable} from "rxjs/Rx";

@Injectable()
export class SnsService {
    constructor (private http: Http) {}
    private _timeLineUrl = "/api/sns/timeLine/twitter";  // URL to web api

    getSnsTimeLines() {
        let body = JSON.stringify({ "id": 99 });
        let headers = new Headers({ 'Content-Type': 'application/json' });//headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this._timeLineUrl, body, options)
          .toPromise()
          .then(this.extractData)
          .catch(this.handleError);

    private extractData(res: Response) {
        console.log(res);
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        console.log(body);
        return body.data || { };
    }
    private handleError (error: any) {
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}