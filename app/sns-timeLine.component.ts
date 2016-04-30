import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {SnsService} from './sns.service';
import {SnsTimeLine} from './sns-timeLine';

@Component({
  selector: 'my-sns-timeLine',
  templateUrl: 'app/template/sns-timeLine.component.html',
  styleUrls: ['app/css/sns-timeLine.component.css']
})
export class SnsTimeLineComponent implements OnInit {
  snsTimeLines: SnsTimeLine[];

  constructor(private _snsService: SnsService, private _router: Router) { }

  getSnsTimeLine() {
    this._snsService.getSnsTimeLines().then(snsTimeLines => this.snsTimeLines = snsTimeLines);
  }

  ngOnInit() {
    this.getSnsTimeLine();
  }
}