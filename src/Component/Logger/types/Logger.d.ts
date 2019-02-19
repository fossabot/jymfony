declare namespace Jymfony.Component.Logger {
    import DateTimeZone = Jymfony.Component.DateTime.DateTimeZone;
    import HandlerInterface = Jymfony.Component.Logger.Handler.HandlerInterface;

    export class Logger extends AbstractLogger {
        public readonly levels: Record<LogLevel, string>;

        public readonly name: string;
        public handlers: HandlerInterface[];
        public readonly processors: Invokable[];

        protected _name: string;
        protected _handlers: HandlerInterface[];
        protected _processors: Invokable[];
        protected _timezone: DateTimeZone | undefined;

        /**
         * Construct the logger.
         */
        __construct(name: string, handlers?: HandlerInterface[], processors?: Invokable[], timezone?: DateTimeZone): void;
        constructor(name: string, handlers?: HandlerInterface[], processors?: Invokable[], timezone?: DateTimeZone);

        /**
         * Returns a new cloned instance with name changed.
         */
        withName(name: string): Logger;

        /**
         * Pushes an handler onto the stack.
         */
        pushHandler(handler: HandlerInterface): Logger;

        /**
         * Pops out an handler off the stack.
         *
         * @throws {Jymfony.Component.Logger.Exception.LogicException}
         */
        popHandler(): HandlerInterface;

        /**
         * Push a logger processor.
         *
         * @param {Invokable} processor
         *
         * @returns {Jymfony.Component.Logger.Logger}
         */
        pushProcessor(processor: Invokable): Logger;

        /**
         * Pops out a processor off the stack.
         *
         * @throws {Jymfony.Component.Logger.Exception.LogicException}
         */
        popProcessor(): Invokable

        /**
         * Adds a record to the log.
         */
        addRecord(level: number, message: string, context: Record<string, any>): boolean;

        /**
         * Adds a log record at the DEBUG level.
         */
        addDebug(message: string, context: Record<string, any>): boolean;

        /**
         * Adds a log record at the INFO level.
         */
        addInfo(message: string, context: Record<string, any>): boolean;

        /**
         * Adds a log record at the NOTICE level.
         */
        addNotice(message: string, context: Record<string, any>): boolean;

        /**
         * Adds a log record at the WARNING level.
         */
        addWarning(message: string, context: Record<string, any>): boolean;

        /**
         * Adds a log record at the ERROR level.
         */
        addError(message: string, context: Record<string, any>): boolean;

        /**
         * Adds a log record at the CRITICAL level.
         */
        addCritical(message: string, context: Record<string, any>): boolean;

        /**
         * Adds a log record at the ALERT level.
         */
        addAlert(message: string, context: Record<string, any>): boolean;

        /**
         * Adds a log record at the EMERGENCY level.
         */
        addEmergency(message: string, context: Record<string, any>): boolean;

        /**
         * Checks if there's a handler that listen on level
         */
        isHandling(level: number): boolean;

        /**
         * Adds a record to the log.
         */
        log(level: number, message: string, context: Record<string, any>): void;
    }
}
