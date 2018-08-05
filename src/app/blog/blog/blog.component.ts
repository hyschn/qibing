import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, OnChanges {
  topic = '';
  article = '';
  filePath: string;

  constructor(private router: Router, private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.resetRouteParams();
  }

  ngOnChanges() {
    this.resetRouteParams();
  }

  resetRouteParams() {
    this.topic = this.route.snapshot.params['topic'];
    this.article = this.route.snapshot.params['article'];
    this.filePath = 'assets/blog/' + this.topic + '/' + this.article + '.md';
  }

}
