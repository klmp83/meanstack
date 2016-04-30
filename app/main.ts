import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HeroService} from './hero.service';
import {SnsService} from './sns.service';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Component, provide} from 'angular2/core';
import {LocationStrategy, HashLocationStrategy} from 'angular2/router';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  HeroService,
  SnsService,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]); // Sns can not call link directly like twitter so it is neccessary to use hash tag


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/