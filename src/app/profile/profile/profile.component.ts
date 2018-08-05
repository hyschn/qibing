import { Component, OnInit } from '@angular/core';

import { AppService } from '../../app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  filePath: string;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.getConfigJson().subscribe(json => {
      this.filePath = 'assets/' + json.profile + '.md';
    });
  }
}
