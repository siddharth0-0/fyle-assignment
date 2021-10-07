import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';



@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    NavBarComponent
  ]
})
export class ShareModule { }
