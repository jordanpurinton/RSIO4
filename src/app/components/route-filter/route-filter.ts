import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'route-filter',
  templateUrl: 'route-filter.html'
})

export class RouteFilterComponent implements OnInit {

  @ViewChild("cc")
  public cardContent: any;
  public http: any;
  public items: any;
  public hideMe: boolean;

  constructor() {

  }
  ngOnInit() {
    console.log(this.cardContent.nativeElement)
  }
  hide() {
    this.hideMe = !this.hideMe;
  }
  toggleFilter() {

  }


}
