import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import { AboutComponent} from "./about.component";
import { CarPartComponent} from "./car-part/car-part.component";
import {RacesComponent} from "./car-race/races.component";
import {CarPartFormComponent} from "./car-part/car-part-form.component";


export const MYROUTES: Routes = [
  {path:'', component:AboutComponent},
  {path:'carPart', component:CarPartComponent},
  {path:'race', component:RacesComponent},
  {path:'carPartForm', component:CarPartFormComponent}
]

@NgModule({
  imports:[RouterModule.forRoot(MYROUTES)],
  exports:[RouterModule]
})

export class AppRoutingModule {

}
