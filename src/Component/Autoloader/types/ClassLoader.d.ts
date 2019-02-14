declare namespace Jymfony.Component.Autoloader {
    export class ClassLoader {
        /**
         * Constructor.
         */
        constructor(finder: Finder, path: any, vm: any);
        load(fn: string, self: ClassLoader): any;
    }
}
