import { Component, OnInit, Input, OnChanges, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { AppService } from '../../app.service';

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
  blogs = [];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getBlogs();
  }

  ngOnChanges() {
    this.getBlogs();
  }

  switchTopic() {
    this.blogs.forEach(element => {
      if (element.topic === this.topic) {
        this.articles = element.articles;
      }
    });
  }

  changeArticle(article) {
    this.article = article;
    this.articleChange.emit(this.article);
  }

  getBlogs() {
    this.appService.getConfigJson().subscribe(json => {
      this.blogs = [];
      const blog: JSON[] = json.blog;
      for (const key in blog) {
        if (blog.hasOwnProperty(key)) {
          const element = blog[key];
          this.blogs.push(element);
        }
      }
      this.switchTopic();
    });
  }
}
