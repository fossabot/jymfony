declare namespace Jymfony.Component.Logger {
    /**
     * Basic Implementation of LoggerAwareInterface.
     */
    export class LoggerAwareTrait {
        /**
         * Sets a logger instance on the object.
         */
        setLogger(logger: LoggerInterface): void;
    }
}
