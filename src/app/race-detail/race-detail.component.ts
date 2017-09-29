import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-race-detail',
  templateUrl: './race-detail.component.html',
  styleUrls: ['./race-detail.component.styl']
})
export class RaceDetailComponent implements OnInit {

  raceId: number

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach(
      (params: Params) => this.raceId = params['id']
    )
  }

}
