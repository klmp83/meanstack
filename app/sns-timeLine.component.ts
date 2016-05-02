import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {SnsService} from './sns.service';
import {SnsTimeLine} from './sns-timeLine';

@Component({
  selector: 'my-sns-timeLine',
  templateUrl: 'app/template/sns-timeLine.component.html',
  styleUrls: ['app/css/sns-timeLine.component.css']
})
export class SnsTimeLineComponent implements OnInit {
  snsTimeLines: SnsTimeLine[];
  type: string;

  constructor(private _snsService: SnsService, private _router: Router, private _routeParams: RouteParams) { }

  getSnsTimeLine() {
    this._snsService.getSnsTimeLines(this.type).then(snsTimeLines => this.snsTimeLines = snsTimeLines);
  }

  ngOnInit() {
    this.type = this._routeParams.get('type');
    console.log(this.type);
    this.getSnsTimeLine();
  }
}