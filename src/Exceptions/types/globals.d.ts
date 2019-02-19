/// <reference lib="es2015" />

type StackTraceRecord = {
    [key: string]: string;
}

declare class Exception extends Error {
    /**
     * The parsed stack trace for this exception.
     */
    readonly stackTrace: StackTraceRecord[];

    /**
     * The exception message.
     */
    message: string;

    /**
     * Constructor.
     */
    __construct(message, code?: number, previous?: Error);

    /**
     * Parses the stack trace of the given error and
     * returns it as an key-value object.
     */
    static parseStackTrace(error: Error): StackTraceRecord[];
}

declare class BadMethodCallException extends Exception {}
declare class DomainException extends Exception {}
declare class InvalidArgumentException extends Exception {}
declare class LogicException extends Exception {}
declare class OutOfBoundsException extends Exception {}
declare class RuntimeException extends Exception {}
declare class UnderflowException extends Exception {}
declare class UnexpectedValueException extends Exception {}

declare module NodeJS  {
    interface Global {
        Exception: Newable<Exception>;
        BadMethodCallException: Newable<BadMethodCallException>;
        DomainException: Newable<DomainException>;
        InvalidArgumentException: Newable<InvalidArgumentException>;
        LogicException: Newable<LogicException>;
        OutOfBoundsException: Newable<OutOfBoundsException>;
        RuntimeException: Newable<RuntimeException>;
        UnderflowException: Newable<UnderflowException>;
        UnexpectedValueException: Newable<UnexpectedValueException>;
    }
}
