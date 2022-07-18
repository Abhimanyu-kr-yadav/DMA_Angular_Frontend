import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FetchserviceService } from './services/fetchservice.service';
import { QuestionsComponent } from './components/questions/questions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordianComponent } from './components/accordian/accordian.component';

import {CdkAccordionModule} from '@angular/cdk/accordion';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    AccordianComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CdkAccordionModule
  ],
  providers: [
    FetchserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
