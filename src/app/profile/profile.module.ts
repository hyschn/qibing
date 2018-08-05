import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule.forChild()
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
