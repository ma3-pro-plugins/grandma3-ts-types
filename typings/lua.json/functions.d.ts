/// <reference lib="es2015.iterable" />

/** @noSelfInFile */

// NOTE: This proper definition is realy problematic )-:
// declare type JsonSerializableObj = { [key: string]: JsonSerializable | undefined };
declare type JsonSerializableObj = object

declare type JsonSerializable =
	| string
	| number
	| boolean
	// | null
	| JsonSerializable[]
	| JsonSerializableObj;

declare module 'json' {
	export function decode(str: string): object;
	export function encode(data: object): string;
}
