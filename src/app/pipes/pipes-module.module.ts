import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrettyBytePipe } from './pretty-byte/pretty-byte.pipe';

@NgModule({
	declarations: [PrettyBytePipe],
	imports: [CommonModule],
	exports: [PrettyBytePipe],
})
export class PipesModule {}
