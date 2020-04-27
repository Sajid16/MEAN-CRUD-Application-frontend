import { NgModule } from '@angular/core';

// angular material imports from developer
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';


const materialComponenetmodules = [
  MatButtonModule,
  MatBadgeModule
]

@NgModule({
  imports: [materialComponenetmodules],
  exports: [materialComponenetmodules]
})
export class MaterialModule { }
