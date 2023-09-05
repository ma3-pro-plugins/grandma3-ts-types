// Based on lfs lua

/// <reference lib="es2015.iterable" />

/** @noSelfInFile */

declare module 'lfs' {
	export function attributes(path: string): {
		mode:
			| 'directory'
			| 'file'
			| 'link'
			| 'socket'
			| 'named pipe'
			| 'char device'
			| 'block device'
			| 'other';
	};
	export function attributes(path: string, name: string): string;
	export function dir(path: string): LuaIterable<string>;
	/**
	 * Create directory at the given path.
	 * The parent directory must exist, otherwise this function will fail.
	 * @return true if successful, undefined if failed
	 */
	export function mkdir(path: string): boolean | undefined;
	export function rmdir(path: string): void;
}
