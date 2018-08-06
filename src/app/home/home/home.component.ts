import { Component, OnInit } from '@angular/core';

import { AppService } from '../../app.service';
@Component({
  selector: 'qibing-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  config = {
    top: {
      topic: '',
      article: ''
    },
    blogs: []
  };
  topTitle: string;
  topContent: string;

  articles = [
  ];
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getHomeConfig();
  }

  getHomeConfig(): void {
    this.appService.getConfigJson().subscribe(json => {
      this.config = json.home;
      this.topTitle = this.config['top']['article'];
      this.appService.getFileContext('assets/' + this.config['top']['topic'] + '/' + this.topTitle + '.md').then(
        context => {
          this.topContent = context.substring(0, 80) + '……';
        }
      );
      const blogs = this.config.blogs;
      blogs.forEach(element => {
        const article = {
          title: element.article,
          topic: element.topic,
          context: '',
          utl: 'assets/' + element.topic + '/' + element.article + '.md'
        };
        this.appService.getFileContext(article.utl).then(context => article.context = context.substring(0, 60) + '……');
        this.articles.push(article);
      });
    });
  }
}
