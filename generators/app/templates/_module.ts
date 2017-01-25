import { ngModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

import { <%= name %>Service } from './<%= name.toLowerCase() %>.service';
import { <%= name %>SearchComponent } from './<%= name.toLowerCase() %>-search.component';
import { <%= name %>RoutingModule } from './<%= name.toLowerCase() %>-routing.module';
import { <%= name %>EditComponent } from './<%= name.toLowerCase() %>-edit.component';
import { <%= name %>Component } from './<%= name.toLowerCase() %>.component';

@NgModule({
    imports: [
        SharedModule,
        <%= name %>RoutingModule
    ],
    declarations: [
        <%= name %>SearchComponent,
        <%= name %>EditComponent,
        <%= name %>Component
    ],
    providers: [
        <%= name %>Service
    ]
})
export class <%= name %>Module { }
