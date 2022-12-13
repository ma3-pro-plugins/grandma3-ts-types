/// <reference lib="es2015.iterable" />

/** @noSelfInFile */


declare module "json" {
	export function decode(str: string): object;
	export function encode(data: object): string;
}