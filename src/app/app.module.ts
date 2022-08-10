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
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RegistercustomerComponent } from './components/registercustomer/registercustomer.component';
import { PopupformComponent } from './components/popupform/popupform.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    RegistercustomerComponent,
    PopupformComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CdkAccordionModule,
    FormsModule,
    MatRadioModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  providers: [
    FetchserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
