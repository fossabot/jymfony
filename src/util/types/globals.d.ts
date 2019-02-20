/// <reference lib="es2015" />

declare function getInterface<T = any>(definition: T): T;
declare function getTrait<T = any>(definition: T): T;

declare namespace __jymfony {
    /**
     * Base class for all jymfony managed objects.
     */
    export class JObject {
        /**
         * Constructor.
         */
        __construct(...args: any[]);
    }
}

declare interface Newable<T> {
    new(): T;
    new(...args: any[]): T;
}

declare type Invokable = Function | {
    __invoke<A extends any[], R>(...args: A): (...args: A) => R;
    __invoke<A0, A extends any[], R>(arg0: A0, ...args: A): (...args: A) => R;
    __invoke<A0, A1, A extends any[], R>(arg0: A0, arg1: A1, ...args: A): (...args: A) => R;
    __invoke<A0, A1, A2, A extends any[], R>(arg0: A0, arg1: A1, arg2: A2, ...args: A): (...args: A) => R;
    __invoke<A0, A1, A2, A3, A extends any[], R>(arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A): (...args: A) => R;
    __invoke<AX, R>(...args: AX[]): (...args: AX[]) => R;
};

declare function mix<T = any>(base: undefined): Newable<__jymfony.JObject>;
declare function mix<T = any>(base: T): Newable<__jymfony.JObject & T>;
declare function mix<T, I0>(base: undefined|T, iface: Newable<I0>): Newable<__jymfony.JObject & T & I0>;
declare function mix<T, I0, I1>(base: undefined|T, interface0: Newable<I0>, interface1: Newable<I1>): Newable<__jymfony.JObject & T & I0 & I1>;
declare function mix<T, I0, I1, I2>(base: undefined|T, interface0: Newable<I0>, interface1: Newable<I1>, interface2: Newable<I2>): Newable<__jymfony.JObject & T & I0 & I1 & I2>;

declare function mix<T, I0, I1, I2, I3>
(base: undefined|T, interface0: Newable<I0>, interface1: Newable<I1>, interface2: Newable<I2>, interface3: Newable<I3>):
    Newable<__jymfony.JObject & T & I0 & I1 & I2 & I3>;
declare function mix<T, I0, I1, I2, I3, I4>
(base: undefined|T, interface0: Newable<I0>, interface1: Newable<I1>, interface2: Newable<I2>, interface3: Newable<I3>, interface4: Newable<I4>):
    Newable<__jymfony.JObject & T & I0 & I1 & I2 & I3 & I4>;
declare function mix<T, I0, I1, I2, I3, I4, I5>
(base: undefined|T, interface0: Newable<I0>, interface1: Newable<I1>, interface2: Newable<I2>, interface3: Newable<I3>, interface4: Newable<I4>, interface5: Newable<I5>):
    Newable<__jymfony.JObject & T & I0 & I1 & I2 & I3 & I4 & I5>;
declare function mix<T, I0, I1, I2, I3, I4, I5, I6>
(base: undefined|T, interface0: Newable<I0>, interface1: Newable<I1>, interface2: Newable<I2>, interface3: Newable<I3>, interface4: Newable<I4>, interface5: Newable<I5>, interface6: Newable<I6>):
    Newable<__jymfony.JObject & T & I0 & I1 & I2 & I3 & I4 & I5 & I6>;
declare function mix<T>
(base: undefined|T, ...interfacesAndTraits: any[]): Newable<__jymfony.JObject & T & any>;

declare function implementationOf<I0>(iface: Newable<I0>): Newable<__jymfony.JObject & I0>;
declare function implementationOf<I0, I1>(interface0: Newable<I0>, interface1: Newable<I1>): Newable<__jymfony.JObject & I0 & I1>;
declare function implementationOf<I0, I1, I2>(interface0: Newable<I0>, interface1: Newable<I1>, interface2: Newable<I2>): Newable<__jymfony.JObject & I0 & I1 & I2>;

declare function implementationOf<I0, I1, I2, I3>
(interface0: Newable<I0>, interface1: Newable<I1>, interface2: Newable<I2>, interface3: Newable<I3>):
    Newable<__jymfony.JObject & I0 & I1 & I2 & I3>;
declare function implementationOf<I0, I1, I2, I3, I4>
(interface0: Newable<I0>, interface1: Newable<I1>, interface2: Newable<I2>, interface3: Newable<I3>, interface4: Newable<I4>):
    Newable<__jymfony.JObject & I0 & I1 & I2 & I3 & I4>;
declare function implementationOf<I0, I1, I2, I3, I4, I5>
(interface0: Newable<I0>, interface1: Newable<I1>, interface2: Newable<I2>, interface3: Newable<I3>, interface4: Newable<I4>, interface5: Newable<I5>):
    Newable<__jymfony.JObject & I0 & I1 & I2 & I3 & I4 & I5>;
declare function implementationOf<I0, I1, I2, I3, I4, I5, I6>
(interface0: Newable<I0>, interface1: Newable<I1>, interface2: Newable<I2>, interface3: Newable<I3>, interface4: Newable<I4>, interface5: I5, interface6: Newable<I6>):
    Newable<__jymfony.JObject & I0 & I1 & I2 & I3 & I4 & I5 & I6>;
declare function implementationOf(...interfacesAndTraits: any[]): Newable<__jymfony.JObject & any>;

declare function isGenerator(value: any): boolean;
declare function isGeneratorFunction(value: any): boolean;
declare function isAsyncFunction(value: any): boolean;
declare function isFunction(value: any): boolean;
declare function isArray(value: any): boolean;
declare function isBuffer(value: any): boolean;
declare function isObject(value: any): boolean;
declare function isScalar(value: any): boolean;
declare function isObjectLiteral(value: any): boolean;
declare function isPromise(value: any): boolean;
declare function isStream(value: any): boolean;
declare function isCallableArray(value: any): boolean;
declare function getCallableFromArray(value: any): Function;

declare class BoundFunction {
    new(thisArg: Object, func: Invokable|Function|GeneratorFunction): Function;
}

declare class EmptyIterator<T = any> implements Iterable<T> {
    [Symbol.iterator](): Iterator<T>;
}
