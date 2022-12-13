// Based on lfs lua

/// <reference lib="es2015.iterable" />

/** @noSelfInFile */


declare module "lfs" {
	export function dir(path: string): LuaIterable<string>;
	export function attributes(path: string): { mode: 'directory' | string }
}