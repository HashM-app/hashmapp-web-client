import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

const MODULES = [MatIconModule, MatTableModule, MatToolbarModule];
@NgModule({
	declarations: [],
	imports: MODULES,
	exports: MODULES,
})
export class MaterialModule {}
