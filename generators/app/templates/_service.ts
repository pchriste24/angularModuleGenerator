import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';

import { WebApiService } from './../../../core/services/web-api.service';
import { ColumnParameters, SearchParameters, GridParameters } from './../../../shared/controls/grid/grid-settings.model';
import { SiteDataService } from './../../../core/services/site-data.service';
import { <%= name %> } from './<%= name.toLowerCase() %>.model';
import { Note } from '../../../shared/controls/form/dynamic-form.model';

@Injectable()
export class <%= name %>Service {

  gridSettings = new GridParameters('<%= name.toLowerCase() %>Name');
  columnSettings: ColumnParameters[] = [

  ];

  searchSettings: SearchParameters = {
    placeholder: 'Search for a <%= name %>',
    addLabel: 'Add a New <%= name %>',
    noItemsLabel: 'No <%= name %> exist. You can create a new <%= name %> by clicking "Add a New <%= name %>" above.',
    showAdvanced: true,
    addItemRoute: 'new'
  };

  constructor(private webAPI: WebApiService, private siteDataService: SiteDataService) {
    this.gridSettings.rows = siteDataService.itemsPerPage;
  }

  get<%= name %>(search = '', name = '', orderBy = '', index = 0, rows = this.gridSettings.rows) {

    let params: URLSearchParams = new URLSearchParams();

    params.set('search', search);
    params.set('<%= name.toLowerCase() %>Name', name);

    params.set('orderBy', orderBy);
    params.set('maximumRows', rows.toString());
    params.set('startRowIndex', index.toString());

    return this.webAPI.getData('<%= name.toLowerCase() %>s', params);
  }

  get<%= name %>Metadata() {
    return this.webAPI.getData('<%= name.toLowerCase() %>s/metadata');
  }

  get<%= name %>(id: number) {
    return this.webAPI.getData('<%= name.toLowerCase() %>s/' + id);
  }

  save<%= name %>(<%= name.toLowerCase() %>: <%= name %>, <%= name.toLowerCase() %>ID?: number) {
    if (<%= name.toLowerCase() %>ID) {
      return this.webAPI.putData('<%= name.toLowerCase() %>s/' + <%= name.toLowerCase() %>ID, <%= name.toLowerCase() %>);
    }
    else {
      return this.webAPI.postData('<%= name.toLowerCase() %>s', <%= name.toLowerCase() %>);
    }
  }

  delete<%= name %>(<%= name.toLowerCase() %>ID: number) {
    return this.webAPI.deleteData('<%= name.toLowerCase() %>s/' + <%= name.toLowerCase() %>ID);
  }
}
