import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FetchserviceService } from './services/fetchservice.service';
import { QuestionsComponent } from './components/questions/questions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CdkAccordionModule,
    FormsModule,
    MatRadioModule
  ],
  providers: [
    FetchserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
