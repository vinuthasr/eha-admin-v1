import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';


export interface PeriodicElement {
  name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Hydrogen' },
  { name: 'Helium' },
  { name: 'Lithium' },
  { name: 'Beryllium' },
  { name: 'Boron' }

];



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  displayedColumns: string[] = ['name', 'select', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */


  /** The label for the checkbox on the passed row */

  ngOnInit() {
  }
  isDisabled = true;
  triggerSomeEvent(row) {
    if (this.isDisabled! == true) {
      this.isDisabled = false;
    }
    else {
      this.isDisabled = true;
    }
  }

}







