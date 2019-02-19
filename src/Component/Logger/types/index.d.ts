/// <reference path="Handler/HandlerInterface.d.ts" />
/// <reference path="Processor/MessageProcessor.d.ts" />
/// <reference path="AbstractLogger.d.ts" />
/// <reference path="Logger.d.ts" />
/// <reference path="LoggerAwareInterface.d.ts" />
/// <reference path="LoggerAwareTrait.d.ts" />
/// <reference path="LoggerInterface.d.ts" />
/// <reference path="LogLevel.d.ts" />
/// <reference path="NullLogger.d.ts" />

declare namespace Jymfony.Component.Logger {
    import DateTime = Jymfony.Component.DateTime.DateTime;

    export interface LogRecordLevel {
        level: number;
    }

    export interface LogRecord extends LogRecordLevel {
        message: string,
        context: any,
        level_name: string,
        channel: string,
        datetime: DateTime,
        extra: any,
    }
}
