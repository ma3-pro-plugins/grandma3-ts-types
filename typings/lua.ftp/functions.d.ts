// Based on http://w3.impa.br/~diego/software/luasocket/ftp.html

/// <reference lib="es2015.iterable" />

/** @noSelfInFile */

/**
 * The ftp namespace offers thorough support to FTP, under a simple interface. The implementation conforms to RFC 959.
 * To really benefit from this module, a good understanding of LTN012, Filters sources and sinks is necessary.
 * @example```
 * // to load the FTP module and any libraries it requires run:
 * import ftp = require('ftp')
 * ```
 */
declare module 'ftp' {
	/**
	 * time in seconds before the program gives up on a connection - `60` is the default time.
	 */
	export var TIMEOUT: number;

	/**
	 * default port for ftp service
	 */
	export const PORT = 21;

	/**
	 * used when no user is provided in url. should be changed to your username. `ftp` is the default username.
	 */
	export var USER: string;

	/**
	 * used when no password is provided in url. should be changed to your e-mail. `anonymous@anonymous.org` is the default anonymous password.
	 */
	export var PASSWORD: string;

	/**
	 * Parser for url string.
	 * @param url is a `string` in the form: `[ftp://][<user>[:<password>]@]<host>[:<port>][/<path>][type=a|i]`
	 */
	export function genericform(url: string): Array<any>;

	/**
	 * Sink is the simple `LTN12` sink that will receive the downloaded data.
	 */
	type LTN12_sink = any;

	/**
	 * `LTN12` pump step function used to pass data from the server to the sink. Defaults to the `LTN12` `pump.step` function
	 */
	type LTN12_pump_step = (...args: any) => any;

	/**
	 * Allows for sending any command to the host.
	 * @param host is the server to connect to.
	 * @param sink is the simple LTN12 sink that will receive the downloaded data.
	 * @param path Argument or path give the target path to the resource in the server.
	 * @param user User name used for authentication. Defaults to `ftp`.
	 * @param password Password used for authentication. Defaults to `anonymous@anonymous.org`.
	 * @param command The FTP command used to obtain data.
	 * @param port The port to used for the control connection. Defaults to 21.
	 * @param type The transfer mode. Can take values "i" or "a". Defaults to whatever is the server default.
	 * @param step `LTN12` pump step function used to pass data from the server to the sink. Defaults to the LTN12 `pump.step` function.
	 * @param create An optional function to be used instead of `socket.tcp` when the communications socket is created.
	 */
	export function command(args: {
		host: string;
		sink: LTN12_sink;
		path: string;
		user?: string;
		password?: string;
		command?: string;
		port?: number;
		type?: 'i' | 'a';
		step?: LTN12_pump_step;
		create?: (...args: any) => any;
	}): any;

	/**
	 * Allows for sending any command to the host.
	 * @param cmd The FTP command used to obtain data.
	 */
	export function command(cmd: string): any;

	/**
	 *
	 * @param host is the server to connect to.
	 * @param port The port to used for the control connection. Defaults to 21.
	 * @param create An optional function to be used instead of `socket.tcp` when the communications socket is created.
	 */
	export function open(host: string, port: number, create?: () => any): any;

	/**
	 * The `get` function has two forms. The simple form has fixed functionality: it downloads the contents of a URL and returns it as a string. The generic form allows a lot more control, as explained below.
	 * @param host is the server to connect to.
	 * @param sink is the simple LTN12 sink that will receive the downloaded data.
	 * @param argument gives the target path to the resource in the server.
	 * @param user User name used for authentication. Defaults to `ftp`.
	 * @param password Password used for authentication. Defaults to `anonymous@anonymous.org`.
	 * @param command The FTP command used to obtain data.
	 * @param port The port to used for the control connection. Defaults to 21.
	 * @param type The transfer mode. Can take values "i" or "a". Defaults to whatever is the server default.
	 * @param step `LTN12` pump step function used to pass data from the server to the sink. Defaults to the LTN12 `pump.step` function.
	 * @param create An optional function to be used instead of `socket.tcp` when the communications socket is created.
	 */
	export function get(args: {
		host: string;
		sink: LTN12_sink;
		argument: string;
		user?: string;
		password?: string;
		command?: string;
		port?: number;
		type?: 'i' | 'a';
		step?: LTN12_pump_step;
		create?: (...args: any) => any;
	}): LuaMultiReturn<[string, 1] | [string, null]>;

	/**
	 * The `get` function has two forms. The simple form has fixed functionality: it downloads the contents of a URL and returns it as a string. The generic form allows a lot more control, as explained below.
	 * @param host is the server to connect to.
	 * @param sink is the simple LTN12 sink that will receive the downloaded data.
	 * @param path gives the target path to the resource in the server.
	 * @param user User name used for authentication. Defaults to `ftp`.
	 * @param password Password used for authentication. Defaults to `anonymous@anonymous.org`.
	 * @param command The FTP command used to obtain data.
	 * @param port The port to used for the control connection. Defaults to 21.
	 * @param type The transfer mode. Can take values "i" or "a". Defaults to whatever is the server default.
	 * @param step `LTN12` pump step function used to pass data from the server to the sink. Defaults to the LTN12 `pump.step` function.
	 * @param create An optional function to be used instead of `socket.tcp` when the communications socket is created.
	 */
	export function get(args: {
		host: string;
		sink: LTN12_sink;
		path: string;
		user?: string;
		password?: string;
		command?: string;
		port?: number;
		type?: 'i' | 'a';
		step?: LTN12_pump_step;
		create?: (...args: any) => any;
	}): LuaMultiReturn<[string, 1] | [string, null]>;

	/**
	 * The `get` function has two forms. The simple form has fixed functionality: it downloads the contents of a URL and returns it as a string.
	 * @param url is a `string` in the form: `[ftp://][<user>[:<password>]@]<host>[:<port>][/<path>][type=a|i]`
	 */
	export function get(url: string): LuaMultiReturn<[string, 1] | [string, null]>;

	/**
	 * The put function has two forms. The simple form has fixed functionality: it uploads a string of content into a URL. The generic form allows a lot more control, as explained below.
	 * @param host is the server to connect to.
	 * @param source is the simple LTN12 source that will provide the contents to be uploaded.
	 * @param argument gives the target path to the resource in the server.
	 * @param user User name used for authentication. Defaults to `ftp`.
	 * @param password Password used for authentication. Defaults to `anonymous@anonymous.org`.
	 * @param command The FTP command used to obtain data.
	 * @param port The port to used for the control connection. Defaults to 21.
	 * @param type The transfer mode. Can take values "i" or "a". Defaults to whatever is the server default.
	 * @param step `LTN12` pump step function used to pass data from the server to the sink. Defaults to the LTN12 `pump.step` function.
	 * @param create An optional function to be used instead of `socket.tcp` when the communications socket is created.
	 */
	export function put(args: {
		host: string;
		source: LTN12_sink;
		argument: string;
		user?: string;
		password?: string;
		command?: string;
		port?: number;
		type?: 'i' | 'a';
		step?: LTN12_pump_step;
		create?: (...args: any) => any;
	}): LuaMultiReturn<[1] | [string, null]>;

	/**
	 * The put function has two forms. The simple form has fixed functionality: it uploads a string of content into a URL. The generic form allows a lot more control, as explained below.
	 * @param host is the server to connect to.
	 * @param source is the simple LTN12 source that will provide the contents to be uploaded.
	 * @param path gives the target path to the resource in the server.
	 * @param user User name used for authentication. Defaults to `ftp`.
	 * @param password Password used for authentication. Defaults to `anonymous@anonymous.org`.
	 * @param command The FTP command used to obtain data.
	 * @param port The port to used for the control connection. Defaults to 21.
	 * @param type The transfer mode. Can take values "i" or "a". Defaults to whatever is the server default.
	 * @param step `LTN12` pump step function used to pass data from the server to the sink. Defaults to the LTN12 `pump.step` function.
	 * @param create An optional function to be used instead of `socket.tcp` when the communications socket is created.
	 */
	export function put(args: {
		host: string;
		source: LTN12_sink;
		path: string;
		user?: string;
		password?: string;
		command?: string;
		port?: number;
		type?: 'i' | 'a';
		step?: LTN12_pump_step;
		create?: (...args: any) => any;
	}): LuaMultiReturn<[1] | [string, null]>;

	/**
	 * The put function has two forms. The simple form has fixed functionality: it uploads a string of content into a URL.
	 * @param url is a `string` in the form: `[ftp://][<user>[:<password>]@]<host>[:<port>][/<path>][type=a|i]`
	 * @param content string of content which will be uploaded to the `url`
	 */
	export function put(url: string, content: string): LuaMultiReturn<[1] | [string, null]>;
}
