import {Injectable} from 'angular2/core';
import {HEROES}     from './mock-heroes';
import {Http, Response} from 'angular2/http';

@Injectable()
export class HeroService {
    constructor (private http: Http) {}
    private _heroesUrl = 'api';  // URL to web api
    getHeroes (): Observable<Hero[]> {
        return this.http.get(this._heroesUrl)
              .map(this.extractData)
              .catch(this.handleError);
}

    getHero(id: number) {
        return Promise.resolve(HEROES).then(
          heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
