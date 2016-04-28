import {Injectable} from 'angular2/core';
import {Headers, RequestOptions, Http, Response} from 'angular2/http';
import {Observable} from "rxjs/Rx";//import {HEROES}     from './mock-heroes';//import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
    constructor (private http: Http) {}
    private _heroesUrl = "api/heroes";  // URL to web api

    getHeroes() {
        let body = JSON.stringify({ "id": 99 });
        let headers = new Headers({ 'Content-Type': 'application/json' });//headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this._heroesUrl, body, options)
          .toPromise()
          .then(this.extractData)
          .catch(this.handleError);//return Promise.resolve(HEROES);
    }

    getHero(id: number) {
        return this.getHeroes().then(
          heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }

    private extractData(res: Response) {
        console.log(res);
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        return body.data || { };
    }
    private handleError (error: any) {
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/