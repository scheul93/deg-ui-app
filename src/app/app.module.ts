import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//Components
import { DistanceSearchComponent } from './search/distance-search/distance-search.component';
import { GenderSearchComponent } from './search/gender-search/gender-search.component';
import { ZipcodeSearchComponent } from './search/zipcode-search/zipcode-search.component';
import { RadioButtonsComponent } from './shared/radio-buttons/radio-buttons.component';
import { DoctorListComponent } from './doctors/doctor-list/doctor-list.component';
import { DoctorComponent } from './doctors/doctor/doctor.component';

//Services
import { SearchService } from './search/shared/search.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    DistanceSearchComponent,
    GenderSearchComponent,
    ZipcodeSearchComponent,
    RadioButtonsComponent,
    DoctorListComponent,
    DoctorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
