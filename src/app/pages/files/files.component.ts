import { Component, OnInit } from '@angular/core';
import { FilesDataSource } from './files.data-source';
import { FileEntry, FileEntryType } from './models/file-entry';

const FILE_DATA: FileEntry[] = [
	{
		name: 'Test Folder',
		type: FileEntryType.Directory,
		size: 4096,
		created: new Date('2022-04-08T13:56:00'),
		modified: new Date('2022-04-08T13:56:00'),
	},
	{
		name: 'Test File',
		type: FileEntryType.File,
		size: 56841,
		created: new Date('2022-04-08T14:23:00'),
		modified: new Date('2022-04-08T14:23:00'),
	},
];

@Component({
	selector: 'app-files',
	templateUrl: './files.component.html',
	styleUrls: ['./files.component.scss'],
})
export class FilesComponent implements OnInit {
	private _displayedColumns: string[] = ['type', 'name', 'size', 'created', 'modified'];
	private _fileEntryData = [...FILE_DATA];

	readonly dataSource = new FilesDataSource(this.fileEntryData);

	get displayedColumns() {
		return this._displayedColumns;
	}

	get fileEntryData() {
		return this._fileEntryData;
	}

	constructor() {}

	ngOnInit(): void {}
}
