import { FetchdataComponent } from './fetchdata/fetchdata.component';
import { CounterComponent } from './counter/counter.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{path:'home',component:HomeComponent},{path:'counter',component:CounterComponent},{path:'fetch',component:FetchdataComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
