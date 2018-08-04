import { Component, OnInit } from '@angular/core';

import { AppService } from '../../app.service';
@Component({
  selector: 'qibing-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  config: JSON;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getHomeConfig();
  }

  getHomeConfig(): void {
    this.appService.getConfigJson().subscribe(json => {
      this.config = json.home;
      console.log(this.config);
    });
  }
}
