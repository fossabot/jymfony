declare namespace __jymfony {
    export class Platform {
        /**
         * Checks if this node version has async function support.
         */
        static hasAsyncFunctionSupport(): boolean;

        /**
         * Are we running on windows?
         */
        static isWindows(): boolean;

        /**
         * Checks if this node version has modern regex (named groups) support.
         */
        static hasModernRegex(): boolean;
    }
}
