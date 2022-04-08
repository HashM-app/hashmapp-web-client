import * as prettyBytes from 'pretty-bytes';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'prettyByte',
})
export class PrettyBytePipe implements PipeTransform {
	transform(value: number): string {
		const [amt, unit] = prettyBytes(value).split(/\s/);
		const amount = Math.round(parseInt(amt));
		return `${amount} ${unit}`;
	}
}
