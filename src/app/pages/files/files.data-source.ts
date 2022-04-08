import { DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';

import { FileEntry } from './models/file-entry';

export class FilesDataSource extends DataSource<FileEntry> {
	private _dataStream = new ReplaySubject<FileEntry[]>();

	constructor(initialData: FileEntry[] = []) {
		super();
		this.setData(initialData);
	}

	connect(): Observable<readonly FileEntry[]> {
		return this._dataStream;
	}

	disconnect() {}

	setData(entries: FileEntry[]) {
		this._dataStream.next(entries);
	}
}
