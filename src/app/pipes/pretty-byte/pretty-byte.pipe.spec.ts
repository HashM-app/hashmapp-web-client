import { PrettyBytePipe } from './pretty-byte.pipe';

describe('PrettyBytePipe', () => {
	it('create an instance', () => {
		const pipe = new PrettyBytePipe();
		expect(pipe).toBeTruthy();
	});
});
