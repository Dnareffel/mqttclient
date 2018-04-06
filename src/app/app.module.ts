import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { MaterializeModule } from "angular2-materialize";
import { GaugeModule } from 'angular-gauge';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    MaterializeModule,
    GaugeModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {




 }
