import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Task3Component } from './task3.component'
import { Test3RoutingModule } from './task3-routing.module';

@NgModule({
    declarations: [
        Task3Component
    ],
    imports: [
        MatIconModule,
        Test3RoutingModule
    ],
    providers: [],
    bootstrap: []
})
export class Test3Module { }
