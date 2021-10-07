import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { ShareModule } from '../common/share.module';


@NgModule({
  declarations: [UserHomeComponent, UserDetailComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ShareModule
  ]
})
export class FeaturesModule { }
