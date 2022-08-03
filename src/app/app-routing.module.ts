import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { RegistercustomerComponent } from './components/registercustomer/registercustomer.component';

const routes: Routes = [
  {path:'questions', component:QuestionsComponent},
  { path: 'getQuestions/:id', component: QuestionsComponent },
  { path:'addCustomer', component: RegistercustomerComponent},
  // { path:'', redirectTo:'home' , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
