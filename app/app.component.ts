import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {DashboardComponent} from './dashboard.component';
import {SnsTimeLineComponent} from './sns-timeLine.component';
import {SnsLoginCallbackComponent} from './sns-login-callback.component';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Heroes']">Heroes</a>
      <!--<a [routerLink]="['SnsLoginCallback']">Twitter Login</a>-->
      <a href="/login/twitter">Twitter Login</a>
      <a [routerLink]="['SnsTimeLine']">Twitter Time Line</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/css/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [HeroService]
})
@RouteConfig([
    // {path: '/', redirectTo: ['Dashboard'] },
    {path: '/dashboard/', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
    {path: '/heroes', name: 'Heroes', component: HeroesComponent},
    {path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent},
    {path: '/sns-login-callback/:type', name: 'SnsLoginCallback', component: SnsLoginCallbackComponent}
    {path: '/sns-timeLine/twitter', name: 'SnsTimeLine', component: SnsTimeLineComponent}
])
export class AppComponent {
  title = 'Tour of Heroes';
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/