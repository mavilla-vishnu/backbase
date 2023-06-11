import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Task1Component } from './task1/task1.component';
import { Task3Component } from './task3/task3.component';
import { Task2Component } from './task2/task2.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { P404Component } from './p404/p404.component';
import { UnknownComponent } from './unknown/unknown.component';
import { PublicComponent } from './public/public.component';
import { Test3Module } from './task3/test3.module';

const routes: Routes = [
  { path: '', redirectTo: '/3', pathMatch: 'full' },
  { path: '1', component: Task1Component, pathMatch: 'full' },
  { path: '2', component: Task2Component, pathMatch: 'full' },
  { path: '3', component: Task3Component, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
