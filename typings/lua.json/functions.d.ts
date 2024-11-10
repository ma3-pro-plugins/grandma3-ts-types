/// <reference lib="es2015.iterable" />

/** @noSelfInFile */

declare type JsonSerializableObj = { [key: string]: JsonSerializable };

declare type JsonSerializable =
	| string
	| number
	| boolean
	| null
	| JsonSerializable[]
	| JsonSerializableObj;

declare module 'json' {
	export function decode(str: string): object;
	export function encode(data: object): string;
}
