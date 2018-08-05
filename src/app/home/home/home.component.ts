import { Component, OnInit } from '@angular/core';

import { AppService } from '../../app.service';
@Component({
  selector: 'qibing-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  config: JSON;
  topTitle: string;
  topContent: string;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getHomeConfig();
  }

  getHomeConfig(): void {
    this.appService.getConfigJson().subscribe(json => {
      this.config = json.home;
      this.topTitle = this.config['top'];
      this.appService.getFileContext('assets/' + this.topTitle + '.md').then(
        context => {
          this.topContent = context;
        }
      );
      this.topTitle = this.topTitle.substring(this.topTitle.lastIndexOf('/') + 1);
    });
  }
}
