export interface FileEntry {
	name: string;
	type: FileEntryType;
	size: number;
	created: Date;
	modified: Date;
}

export enum FileEntryType {
	File = 'file',
	Directory = 'directory',
}
