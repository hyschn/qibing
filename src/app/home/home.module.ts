import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MarkdownModule.forChild(),
  ],
  declarations: [HomeComponent],
})
export class HomeModule { }
