import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  changeTopic(topic) {
    this.topic = topic;
    this.topicChange.emit(this.topic);
    this.article = null;
    this.articleChange.emit(this.article);
  }
}
