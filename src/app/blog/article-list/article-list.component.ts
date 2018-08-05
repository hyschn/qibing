import { Component, OnInit, Input, OnChanges, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit, OnChanges {
  @Input()
  topic: string;
  articles = [];
  @Input()
  article: string;
  @Output()
  articleChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.switchTopic();
  }

  ngOnChanges() {
    this.switchTopic();
  }

  switchTopic() {
    switch (this.topic) {
      case 'about-this-site':
        this.articles = ['起源', '技术', '模块', '规划', '发展历程'];
        break;
      case 'linux':
        this.articles = ['commend', 'shell'];
        break;
      case 'neo4j':
        this.articles = ['introduction'];
        break;
      case 'search-engine':
        this.articles = ['介绍'];
        break;
      case 'nlp':
        this.articles = ['introduction'];
        break;
      default:
        break;
    }
  }

  changeArticle(article) {
    this.article = article;
    this.articleChange.emit(this.article);
  }
}
