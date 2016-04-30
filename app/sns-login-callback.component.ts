import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
  selector: 'sns-login-callback',
  templateUrl: 'app/template/sns-login-callback.component.html',
  styleUrls: ['app/css/sns-login-callback.component.css']
})
export class SnsLoginCallbackComponent implements OnInit {
  snsType: String;

  constructor(private _routeParams: RouteParams) {}

  ngOnInit() {
      let type = this._routeParams.get('type');
      console.log(type);
      this.snsType = type; //this._heroService.getHero(id).then(hero => this.hero = hero);
  }

  goBack() {
    window.history.back();
  }
}