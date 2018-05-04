import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {TextDecorationDirective} from "./text-decoration.directive";
import {MyDatePipe} from "./mydate.pipe";

@NgModule({
  imports: [CommonModule],
  declarations: [MyDatePipe, TextDecorationDirective],
  exports: [MyDatePipe, TextDecorationDirective]
})
export class SharedModule {

}
