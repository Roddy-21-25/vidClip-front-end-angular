import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchVideosRoutingModule } from './search-videos-routing.module';
import { SearchComponent } from './Components/search/search.component';
import { FormsModule } from '@angular/forms';

// Pagination
import {NgxPaginationModule} from 'ngx-pagination';

// Http
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SearchVideosRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class SearchVideosModule { }
