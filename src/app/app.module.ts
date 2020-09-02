import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPrintModule } from 'ngx-print';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { AngularMaterialPracticeComponent } from './angular-material-practice/angular-material-practice.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import sharable material module
import { MaterialModule } from './material/material.module';
import { ChildComponentComponent } from './child-component/child-component.component';
import { MaterialDataTableComponent } from './material-data-table/material-data-table.component';
import { DataTableComponent } from './data-table/data-table.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { ToastrModule } from 'ngx-toastr';


const ROUTES: Routes = [
  { path: '', component: ShoppingItemComponent },
  { path: 'material', component: AngularMaterialPracticeComponent },
  { path: 'material-dataTable', component: MaterialDataTableComponent },
  { path: 'material-dataTable-2', component: DataTableComponent },
  { path: 'grid-view', component: GridViewComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ShoppingItemComponent,
    AngularMaterialPracticeComponent,
    ChildComponentComponent,
    MaterialDataTableComponent,
    DataTableComponent,
    GridViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPrintModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MaterialModule,
    ToastrModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
