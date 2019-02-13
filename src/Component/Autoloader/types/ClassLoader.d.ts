declare namespace Jymfony.Component.Autoloader {
    export class ClassLoader {
        /**
         * Constructor.
         */
        constructor(finder: Jymfony.Component.Autoloader.Finder, path: any, vm: any);
        load(fn: string, self: Jymfony.Component.Autoloader.ClassLoader): any;
    }
}
