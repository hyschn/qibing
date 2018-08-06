import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { AppService } from '../../app.service';

@Component({
  selector: 'blog-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input()
  topic: string;
  @Output()
  topicChange = new EventEmitter();
  @Input()
  article: string;
  @Output()
  articleChange = new EventEmitter();
  topics = [];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getTopics();
  }

  changeTopic(topic) {
    this.topic = topic;
    this.topicChange.emit(this.topic);
    this.article = null;
    this.articleChange.emit(this.article);
  }

  getTopics() {
    this.appService.getConfigJson().subscribe(json => {
      const blog: JSON[] = json.blog;
      for (const key in blog) {
        if (blog.hasOwnProperty(key)) {
          const element = blog[key];
          this.topics.push(element['topic']);
        }
      }
    });
  }
}
