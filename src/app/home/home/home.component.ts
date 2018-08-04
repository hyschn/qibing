import { Component, OnInit } from '@angular/core';

import { AppService } from '../../app.service';
@Component({
  selector: 'qibing-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  json: JSON;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.appService.getConfigJson().subscribe(json => {
      this.json = json;
      console.log(this.json);
    });
  }
}
