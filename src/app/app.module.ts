import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {AboutComponent} from "./about.component";
import {SharedModule} from "./shared/shared.module";
import {CarPartModule} from "./car-part/car-part.module";
import {RacesModule} from "./car-race/races.module";


@NgModule({
  // 추가하는 컴포넌트 작성
  declarations: [
    AppComponent,
    AboutComponent
  ],

  // 모듈 import
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CarPartModule,
    RacesModule
  ],

  providers: [],

  // 가장 최초에 부르는 컴포넌트
  bootstrap: [AppComponent]
})
export class AppModule { }
