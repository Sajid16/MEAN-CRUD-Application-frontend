import { NgModule } from '@angular/core';

// angular material imports from developer
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

const materialComponenetmodules = [
  MatButtonModule,
  MatBadgeModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
];

@NgModule({
  imports: [materialComponenetmodules],
  exports: [materialComponenetmodules]
})
export class MaterialModule { }
