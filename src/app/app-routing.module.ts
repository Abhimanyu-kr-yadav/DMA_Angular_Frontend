import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { RegistercustomerComponent } from './components/registercustomer/registercustomer.component';
import { QuestionsGuard } from './guards/questions.guard';

const routes: Routes = [
  {path:'questions', component:QuestionsComponent, canActivate : [QuestionsGuard]},
  { path: 'getQuestions/:id', component: QuestionsComponent },
  { path:'addCustomer', component: RegistercustomerComponent},
  { path:'home', component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
