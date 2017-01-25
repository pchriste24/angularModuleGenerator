import { Component } from '@angular/core';

import { SiteDataService } from './../../../core/services/site-data.service';
import { <%= name %>Service } from './<%= name.toLowerCase() %>.service';
import { <%= name %> } from './<%= name.toLowerCase() %>.model';
import { SearchEvent } from '../../../shared/controls/search/search-event.model';

@Component({
  templateUrl: './<%= name.toLowerCase() %>-search.component.html'
})
export class <%= name %>SearchComponent {

  <%= name.toLowerCase() %>s: <%= name %>[];
  totalRecords = 0;

  constructor(private siteDataService: SiteDataService, private <%= name.toLowerCase() %>Service: <%= name %>Service) { }

  get<%= name %>s(parameters: SearchEvent) {

    let search = parameters.filters['search'] ? parameters.filters['search'].value : '';
    let <%= name.toLowerCase() %>Name = parameters.filters['<%= name.toLowerCase() %>Name'] ? parameters.filters['<%= name.toLowerCase() %>Name'].value : '';

    let sort = parameters.sortBy;

    this.<%= name.toLowerCase() %>Service.get<%= name %>s(search, <%= name.toLowerCase() %>Name, sort, parameters.first, parameters.rows)
      .subscribe(data => {
       this.setGridValues(data.count, data.<%= name.toLowerCase() %>s, data.viewOnly);
        this.siteDataService.showLoader(false);
      });
  }

  setGridValues(count: number, <%= name.toLowerCase() %>s: <%= name %>[], viewOnly: boolean) {
    this.totalRecords = count;
    this.<%= name.toLowerCase() %>s = <%= name.toLowerCase() %>s;
    this.<%= name.toLowerCase() %>Service.gridSettings.viewOnly = viewOnly;
  }
}
