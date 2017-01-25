import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { SiteDataService } from './../../../core/services/site-data.service';
import { Service } from './<%= name.toLowerCase() %>.service';
import { DynamicFormField, Note } from '../../../shared/controls/form/dynamic-form.model';
import { <%= name %> } from './<%= name.toLowerCase() %>.model';


@Component({
    templateUrl: './<%= name.toLowerCase() %>-edit.component.html'
})
export class <%= name %>EditComponent implements OnInit {

    metadata: DynamicFormField[];
    <%= name.toLowerCase() %>: <%= name %>;
    <%= name.toLowerCase() %>ID: number;
    newEntity: boolean;

    constructor(
        private siteDataService: SiteDataService,
        private <%= name.toLowerCase() %>Service: <%= name %>Service,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params['id'] === 'new') {
                this.<%= name.toLowerCase() %>Service.get<%= name %>Metadata()
                    .subscribe(data => {
                        this.newEntity = true;
                        this.metadata = data;
                        this.<%= name.toLowerCase() %>ID = undefined;
                        this.<%= name.toLowerCase() %> = new <%= name %>();
                        this.siteDataService.showLoader(false);
                    });
            }
            else {
                this.<%= name.toLowerCase() %>ID = +params['id'];

                Observable.forkJoin(
                    this.<%= name.toLowerCase() %>Service.get<%= name %>Metadata(),
                    this.<%= name.toLowerCase() %>Service.get<%= name %>(this.<%= name.toLowerCase() %>ID),
                    .subscribe(data => {
                        this.newEntity = false;
                        this.metadata = data[0];
                        this.<%= name.toLowerCase() %> = data[1];
                        this.siteDataService.showLoader(false);
                    },
                    error => { this.siteDataService.handleError(error); });
            }
        });

    }

    save(<%= name.toLowerCase() %>: <%= name %>) {
        this.save<%= name %>(<%= name.toLowerCase() %>);
    }

    saveAndAdd(<%= name.toLowerCase() %>: <%= name %>) {
        this.save<%= name %>(<%= name.toLowerCase() %>, true);
    }

    save<%= name %>(<%= name.toLowerCase() %>: <%= name %>, routeToNew = false) {
        this.siteDataService.showLoader(true);

        this.<%= name.toLowerCase() %>Service.save<%= name %>(<%= name.toLowerCase() %>, this.<%= name.toLowerCase() %>ID)
            .subscribe(data => {
                this.siteDataService.showSuccessMessage('<%= name %> information was saved successfully.');

                if (routeToNew) {
                    if (!this.newEntity) {
                        this.siteDataService.routeRelativeWithMessage('../new', this.route);
                    }
                }
                else {
                    if (this.<%= name.toLowerCase() %>ID === undefined && !routeToNew) {
                        this.<%= name.toLowerCase() %>ID = data;
                        this.siteDataService.routeRelativeWithMessage('../' + data, this.route);
                    }
                }
            },
            error => { this.siteDataService.handleError(error); });
    }

    delete() {
        this.siteDataService.showLoader(true);
        this.<%= name.toLowerCase() %>Service.delete<%= name %>(this.<%= name.toLowerCase() %>ID)
            .subscribe(data => {
                this.siteDataService.showSuccessMessage('<%= name %> was deleted.');
                this.siteDataService.routeRelativeWithMessage('../new', this.route);
            },
            error => { this.siteDataService.handleError(error); });
    }

    cancel() {
        this.router.navigate(['..'], { relativeTo: this.route });
    }
}
