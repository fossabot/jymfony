/// <reference lib="esnext" />
/// <reference path="util/Async.d.ts" />
/// <reference path="util/Platform.d.ts" />
/// <reference types="node" />

import { Writable } from "stream";

declare namespace __jymfony {
    /**
     * Executes a callback iterating asynchronously onto the given iterator.
     */
    function forAwait(iterator: Iterable<any>|AsyncIterable<any>, callback: Invokable|Function|GeneratorFunction): Promise<any>;

    /**
     * Stops execution for the given number of ms.
     * The returned promised resolves after the time has passed.
     */
    function sleep(ms: number): Promise<void>;

    /**
     * Emits a deprecation warning message.
     */
    function trigger_deprecated(message: string): void;

    /**
     * Sync-recursively creates directories.
     */
    function mkdir(dir: string, mode?: number): void;

    /**
     * Creates a function that delays invoking a function after
     * a given time has elapsed, de-duplicating calls.
     */
    function debounce(func: Invokable|Function|GeneratorFunction, wait: number): Function;

    /**
     * Gets a method given an object and the method name.
     */
    function getFunction(object: Object, funcName: string): Function;

    /**
     * Clones an object.
     */
    function clone(object: Object): Object;

    /**
     * Recursively clones an object and all its arrays/literal objects.
     */
    function deepClone(object: Object): Object;

    /**
     * Recursively merges literal objects/arrays.
     */
    function deepMerge(...args: (any[]|Record<any, any>)[]): any|Object;

    /**
     * Calculate object difference by keys.
     */
    function diffKey(arr1: any[]|Record<any, any>, ...arrs: (any[]|Record<any, any>)[]): Object;

    /**
     * Get key, value pairs from any object.
     */
    function getEntries<K extends keyof string|number|symbol, V>(object: Record<K, V>): IterableIterator<[K, V]>;

    /**
     * Deep-equality check.
     */
    function equal(left: any, right: any, strict?: boolean): boolean;

    /**
     * Returns an object with the common keys only.
     */
    function intersect_key(obj: any[]|Record<any, any>, ...arrays: (any[]|Record<any, any>)[]): Record<any, any>;

    /**
     * Merges arrays or objects.
     */
    function objectMerge(...args: any[]): any;

    /**
     * Converts a key-value object to a Map object.
     */
    function obj2map(obj: Record<any, any>): Map<any, any>;

    /**
     * Converts a Map object to a key-value object.
     */
    function map2obj(obj: Map<any, any>): Record<any, any>;

    /**
     * Serializes any value to a string.
     */
    function serialize(value: any): string;

    /**
     * Unserializes values from a serialized string.
     */
    function unserialize(serialized: string): any;

    /**
     * Escapes a regex pattern.
     */
    function regex_quote(str: string): string;

    /**
     * A writable stream that buffers all the content.
     */
    export class StreamBuffer extends Writable {
        /**
         * The buffer.
         */
        readonly buffer: Buffer;

        /**
         * The size of the data contained in the buffer.
         */
        readonly size: number;
    }

    /**
     * Calculates a CRC32 of a string.
     */
    function crc32(stringOrBuffer: string|Buffer): number;

    /**
     * Escapes a shell argument.
     */
    function escapeshellarg(arg: string): string;

    /**
     * Calculates the levenshtein distance between two strings.
     */
    function levenshtein(s: string, t: string): number;

    /**
     * @internal
     */
    function internal_parse_query_string(params: any): any;

    /**
     * Parses a query string and returns a kv object.
     */
    function parse_query_string(str: string): Record<string, any>;

    /**
     * Formats values into a string.
     */
    function sprintf(format: string, ...args: any[]): string;

    /**
     * The strcspn() function returns the number of characters (including whitespaces)
     * found in a string before any part of the specified characters are found.
     */
    function strcspn(str: string, mask: string, start?: number, length?: number): number;

    /**
     * Strips HTML tags from a string.
     */
    function strip_tags(input: string, allowed?: string): string;

    /**
     * Replaces parts of strings.
     */
    function strtr(str: string, replacePairs: Record<string, string>): string;

    /**
     * Replace text within a portion of a string.
     */
    function substr_replace(search: string|string[], replacement: string|string[], start: number|number[], length?: number|number[]): string|string[];

    /**
     * Trim characters at the end of a string.
     */
    function rtrim(str: string, charList?: string): string;

    /**
     * Trim characters at the beginning of a string.
     */
    function ltrim(str: string, charList?: string): string;

    /**
     * Trim characters at the beginning and at the end of a string.
     */
    function trim(str: string, charList?: string): string;

    /**
     * Make the first character upper-case and the rest lower-case.
     */
    function ucfirst(str: string): string;

    /**
     * Make the first character of each word upper-case and the rest lower-case.
     */
    function ucwords(str: string): string;

    /**
     * If operator parameter is undefined returns -1 if version1 is
     * lower than version2, 0 if they are equal, 1 if the second is lower
     *
     * Otherwise returns true if the relationship is the one specified
     * by the operator, false otherwise
     */
    function version_compare(version1: string|number, version2: string|number, operator?: string|undefined): boolean|number;

    /**
     * Wraps a string to a given number of characters.
     */
    function wordwrap(str: string, width?: number, strBreak?: string, cut?: boolean): string;
}
