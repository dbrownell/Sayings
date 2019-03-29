import { Component, OnInit, ViewChild } from '@angular/core';
import { Isayings } from '../shared/isayings';
import { Observable } from 'rxjs';
import { SayingsService } from '../shared/services/sayings.service';
import { mergeMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { AgGridNg2 } from 'ag-grid-angular';
@Component({
  selector: 'app-sayings-list',
  templateUrl: './sayings-list.component.html',
  styleUrls: ['./sayings-list.component.scss']
})
export class SayingsListComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
  // private defaultColDef;
  // private rowData: [];
  @ViewChild('agGrid') agGrid: AgGridNg2;

  columnDefs = [
    { headerName: 'Title', field: 'title', sortable: true, filter: true, checkboxSelection: true },
    { headerName: 'Saying', field: 'saying', width: '300px' }
  ];
  defaultColDef = { resizable: true };
  rowData: Observable<Isayings[]>;
  readonly sayings$: Observable<Isayings[]>;

  constructor(private sayingsService: SayingsService, private route: ActivatedRoute) {}
  ngOnInit() {}
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.rowData = this.route.params.pipe(
      mergeMap(({ categoryTitle }) => this.getSayings(categoryTitle))
    );
  }
  private getSayings(categoryTitle): Observable<Isayings[]> {
    return this.sayingsService.getSayingsByCategory(categoryTitle);
  }
  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataStringPresentation = selectedData
      .map(node => node.title + ' ' + node.saying)
      .join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }
}
