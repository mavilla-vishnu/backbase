import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import { P404Component } from '../p404/p404.component';
import { UnknownComponent } from '../unknown/unknown.component';
import { PublicComponent } from '../public/public.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: '404', component: P404Component },
    { path: 'unknown', component: UnknownComponent },
    { path: 'public', component: PublicComponent },
    { path: '**', component: P404Component }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Test3RoutingModule { }
