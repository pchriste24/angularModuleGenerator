import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { <%= name %>EditComponent } from './<%= name.toLowerCase() %>-edit.component';
import { <%= name %>SearchComponent } from './<%= name.toLowerCase() %>-search.component';

import { <%= name %>Component } from './division.component';

import { <%= name %>Component } from './<%= name.toLowerCase() %>.component';
import { AuthGuard } from '../../../core/services/auth-guard.service';

@NgModule({
    imports: [
       RouterModule.forChild([
            {
                path: '',
                component: <%= name %>Component,
                canActivateChild: [AuthGuard],
                children: [
                    { path: ':id', component: <%= name %>EditComponent },
                    { path: '/new', component: <%= name %>EditComponent },
                    { path: '', component: <%= name %>SearchComponent }]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class <%= name %>RoutingModule { }
