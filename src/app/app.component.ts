import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';

import { FormBuilder, FormGroup } from '@angular/forms';
import { map, withLatestFrom, startWith, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

import { DataSource } from '@angular/cdk/table';

import * as XLSX from "xlsx";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'export-poc';

  filename="exportedData.xlsx";

  value$: Observable<value[]>;
  values$: Observable<value[]>;

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({ filter: [''] });

    this.value$ = this.getValue();

    this.values$ = this.formGroup.get('filter').valueChanges.pipe(
      startWith(''),
      withLatestFrom(this.value$),
      map(([val, value]) =>
        !val ? value : value.filter((x) => 
          x.subject.toLowerCase().includes(val) ||
          x.unit.toLowerCase().includes(val) ||
          x.position1.toLowerCase().includes(val) ||
          x.position2.toLowerCase().includes(val) ||
          x.position3.toLowerCase().includes(val) ||
          x.position4.toLowerCase().includes(val))
      )
    );
  }

  private getValue() {
    return of([
      { 
        subject: "reponsibility 11",
        unit: "Org2o",
        position1: "Review and Attest",
        position2: "Suggest",
        position3: "Approve",
        position4: "Approve"
      }, 
      { 
        subject: "reponsibility 12",
        unit: "Org2",
        position1: "Review and Attest",
        position2: "Suggest",
        position3: "Approve",
        position4: ""
      }, 
      { 
        subject: "reponsibility 13",
        unit: "Org2",
        position1: "Review and Attest",
        position2: "Suggest",
        position3: "",
        position4: "Approve"
      }, 
      { 
        subject: "reponsibility 14",
        unit: "Org2",
        position1: "Review and Attest",
        position2: "Suggest",
        position3: "",
        position4: "Approve"
      }, 
      { 
        subject: "reponsibility 15",
        unit: "Org2",
        position1: "Review and Attest",
        position2: "Suggest",
        position3: "Suggest",
        position4: "Approve"
      }, 
      { 
        subject: "reponsibility 16",
        unit: "Org2",
        position1: "Review and Attest",
        position2: "Suggest",
        position3: "",
        position4: "Suggest"
      }, 
      { 
        subject: "reponsibility 17",
        unit: "Org2",
        position1: "Review and Attest",
        position2: "Attest",
        position3: "",
        position4: "Review"
      }, 
      { 
        subject: "reponsibility 18",
        unit: "Org2",
        position1: "Review and Attest",
        position2: "Suggest",
        position3: "Attest",
        position4: "Approve"
      }, 
      { 
        subject: "reponsibility 19",
        unit: "Org2",
        position1: "Review and Attest",
        position2: "Attest",
        position3: "Attest",
        position4: "Attest"
      },
      { 
        subject: "reponsibility 19",
        unit: "Org2",
        position1: "Review and Attest",
        position2: "",
        position3: "",
        position4: ""
      }, 
      { 
        subject: "reponsibility 19",
        unit: "Org2",
        position1: "Review and Attest",
        position2: "",
        position3: "",
        position4: "Attest"
      },
      { 
        subject: "reponsibility 19",
        unit: "Org2",
        position1: "Review and Attest",
        position2: "Attest",
        position3: "Attest",
        position4: ""
      },
      { 
        subject: "reponsibility 19",
        unit: "Org2",
        position1: "Review and Attest",
        position2: "Attest",
        position3: "Suggest",
        position4: ""
      },
      { 
        subject: "reponsibility 19",
        unit: "Org2",
        position1: "Review and Attest",
        position2: "Attest",
        position3: "Suggest",
        position4: ""
      },
      { 
        subject: "reponsibility 19",
        unit: "Org2",
        position1: "Review and Attest",
        position2: "",
        position3: "Suggest",
        position4: "Attest"
      },
      { 
        subject: "reponsibility 19",
        unit: "Org2",
        position1: "Review and Attest",
        position2: "Attest",
        position3: "Suggest",
        position4: "Attest"
      },
      { 
        subject: "reponsibility 19",
        unit: "Org2",
        position1: "Review and Attest",
        position2: "Review",
        position3: "Suggest",
        position4: ""
      },
      { 
        subject: "reponsibility 19",
        unit: "Org2",
        position1: "Review and Attest",
        position2: "",
        position3: "Suggest",
        position4: "Review"
      },
      { 
        subject: "reponsibility 19",
        unit: "Org2",
        position1: "Review and Attest",
        position2: "Review",
        position3: "Suggest",
        position4: ""
      },
      { 
        subject: "reponsibility 19",
        unit: "Org2",
        position1: "Review and Attest",
        position2: "Review",
        position3: "Suggest",
        position4: ""
      },
      { 
        subject: "reponsibility 19",
        unit: "Org2",
        position1: "Review and Attest",
        position2: "Review",
        position3: "Suggest",
        position4: "Review"
      },
      { 
        subject: "reponsibility 19",
        unit: "Org2",
        position1: "Review and Attest",
        position2: "Review",
        position3: "Suggest",
        position4: "Review"
      },
      { 
        subject: "reponsibility 19",
        unit: "Org2",
        position1: "Review and Attest",
        position2: "",
        position3: "Suggest",
        position4: "Review"
      },
      { 
        subject: "reponsibility 19",
        unit: "Org2",
        position1: "Review and Attest",
        position2: "Review",
        position3: "Suggest",
        position4: ""
      },
      { 
        subject: "reponsibility 19",
        unit: "Org2",
        position1: "Review and Attest",
        position2: "Delete",
        position3: "Suggest",
        position4: "Delete"
      },
      { 
        subject: "reponsibility 19",
        unit: "Org2",
        position1: "Review and Attest",
        position2: "Delete",
        position3: "Suggest",
        position4: ""
      },
      { 
        subject: "reponsibility 19",
        unit: "Org2",
        position1: "Review and Attest",
        position2: "Delete",
        position3: "Suggest",
        position4: ""
      },
      { 
        subject: "reponsibility 19",
        unit: "Org2",
        position1: "Review and Attest",
        position2: "",
        position3: "Suggest",
        position4: "Suggest"
      },
      { 
        subject: "reponsibility 20",
        unit: "Org2",
        position1: "Review",
        position2: "Suggest",
        position3: "Delete",
        position4: "Suggest"
      }])
      .pipe(tap(console.log));
  }

  ngOnInit() {
  }

  exportedexcel(): void {
    let element = document.getElementById("excel-table");
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheets1");

    XLSX.writeFile(wb, this.filename);
  }

  applyFilter(filterText: string) {
    //this.dataSource.filter = filterText.trim().toLocaleLowerCase();
  }

  sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("excel-table");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount ++;
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }
}

export interface value {
  subject: string;
  unit: string;
  position1: string;
  position2: string;
  position3: string;
  position4: string;
}