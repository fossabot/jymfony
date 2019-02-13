declare namespace Jymfony.Component.Autoloader {
    export class Namespace {
        /**
         * Constructor.
         */
        constructor(autoloader: Jymfony.Component.Autoloader.Autoloader, fqn: string, baseDirs?: string|string[], req?: NodeRequire);

        /**
         * Add a base directory to search classes in
         *
         * @param {string} directory
         *
         * @returns {Jymfony.Component.Autoloader.Namespace}
         */
        addDirectory(directory: string): Jymfony.Component.Autoloader.Namespace;

        /**
         * Get the namespace FQN
         *
         * @returns {string}
         */
        readonly name: string;

        /**
         * Gets the namespace base directories.
         *
         * @returns {string[]}
         */
        readonly directories: string[];
    }
}
