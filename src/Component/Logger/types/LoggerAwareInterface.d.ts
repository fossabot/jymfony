declare namespace Jymfony.Component.Logger {
    export class LoggerAwareInterface {
        /**
         * Sets a logger instance on the object.
         */
        setLogger(logger: LoggerInterface): void;
    }
}
