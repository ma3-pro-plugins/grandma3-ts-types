/// <reference lib="es2015.iterable" />

/** @noSelfInFile */
type SocketCore = {
	setoption(options: 'reuseaddr', value: boolean): void;
	/**
	 *
	 * @param addr
	 * @param port
	 * @returns [result,error]
	 */
	bind(addr: string, port: number): LuaMultiReturn<[number | undefined, string | undefined]>;
	close(): void;
};
declare module 'socket.core' {
	export function tcp4(): SocketCore;
}
