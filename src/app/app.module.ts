import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
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
import { ContactComponent } from './contact/contact.component';
import { FormsComponent } from './forms/forms.component';

// material modules
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule
} from '@angular/material';

// custom module
import { TodoModule } from './todo/todo.module';
import { TasksComponent } from './tasks/tasks.component';
import { UncheckallComponent } from './check/uncheckall/uncheckall.component';
import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { ListUploadComponent } from './upload/list-upload/list-upload.component';
import { DetailsUploadComponent } from './upload/details-upload/details-upload.component';


const ROUTES: Routes = [
  // { path: '', component: AppComponent},
  { path: 'CRUD', component: ShoppingItemComponent },
  { path: 'material', component: AngularMaterialPracticeComponent },
  { path: 'material-dataTable', component: MaterialDataTableComponent },
  { path: 'material-dataTable-2', component: DataTableComponent },
  { path: 'grid-view', component: GridViewComponent },
  { path: 'reactive-form', component: ContactComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'check-uncheck-all', component: UncheckallComponent },
  { path: 'search', component: UncheckallComponent },
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
    ContactComponent,
    FormsComponent,
    TasksComponent,
    UncheckallComponent,
    FormUploadComponent,
    ListUploadComponent,
    DetailsUploadComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPrintModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MaterialModule,
    ToastrModule.forRoot(),
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
