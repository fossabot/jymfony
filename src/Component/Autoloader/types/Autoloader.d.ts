declare namespace Jymfony.Component.Autoloader {
    export class Autoloader {
        /**
         * Debug flag.
         * If true, the autoloader will throw ClassNotFoundException if
         * the class (or a namespace) does not exist.
         *
         * @returns {boolean}
         */
        public debug: boolean;

        public readonly finder: Jymfony.Component.Autoloader.Finder;

        /**
         * Constructor.
         */
        constructor(finder?: Jymfony.Component.Autoloader.Finder, globalObject?: NodeJS.Global);

        /**
         * Scans package.json of the project and root dependencies
         * and register itself as autoloader for found namespaces
         */
        register(): void;

        private _processPackageInfo(packageInfo: any, baseDir: string): void;
        private _processNamespaces(config: any, baseDir: string): void;
        private _processIncludes(config: any, baseDir: string): void;
        private _ensureNamespace(namespace: string, parent: any): Jymfony.Component.Autoloader.Namespace;
        private _generateFqn(parent: any, namespace: string): string;
    }
}
