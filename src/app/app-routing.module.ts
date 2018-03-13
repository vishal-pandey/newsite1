import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestComponent} from './components/test/test.component';
import {HomeComponent} from './components/home/home.component';
import {ServiceComponent} from './components/service/service.component';
import {ContactComponent} from './components/contact/contact.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';


const routes: Routes = [
	{
		path: 'test',
		component: TestComponent
	},
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'skills',
		component: ServiceComponent
	},
	{
		path: 'contact',
		component: ContactComponent
	},
	{
		path: 'portfolio',
		component: PortfolioComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
