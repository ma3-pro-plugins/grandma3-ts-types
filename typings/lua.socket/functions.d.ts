/// <reference lib="es2015.iterable" />

/** @noSelfInFile */
type Socket = {
	close(): void
}
declare module 'socket' {
	export function bind(host: string, port: number, backlog?: any): Socket
	export function gettime(): number
}
