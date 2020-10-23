import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableExporterModule } from 'mat-table-exporter';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table'
import { MatSortModule } from '@angular/material/sort';
import { HeaderComponent } from './header/header.component';
import { SortDirective } from './directive/sort.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SortDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableExporterModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
