import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchVideosRoutingModule } from './search-videos-routing.module';
import { SearchComponent } from './Components/search/search.component';
import { FormsModule } from '@angular/forms';

// Pagination
import {NgxPaginationModule} from 'ngx-pagination';

// Http || Intercerptos
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProxyInterceptor } from './proxy.interceptor';
import { ApiServiceService } from './api-service.service';

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
  ],providers: [
    ApiServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ProxyInterceptor,
      multi: true,
    },
  ],
})
export class SearchVideosModule { }
