import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnChanges {
  @Input()
  filePath: string;

  constructor(private router: Router, private route: ActivatedRoute, ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.resetRouteParams();
  }

  resetRouteParams() {
    const topic = this.route.snapshot.params['topic'];
    const article = this.route.snapshot.params['article'];
    this.filePath = 'assets/blog/' + topic + '/' + article + '.md';
  }
}
