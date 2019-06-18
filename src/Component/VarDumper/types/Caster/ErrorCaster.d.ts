declare namespace Jymfony.Component.VarDumper.Caster {
    import Stub = Jymfony.Component.VarDumper.Cloner.Stub;

    export class ErrorCaster {
        /**
         * Casts an Error object.
         */
        static castError(error: Error, a: any, stub: Stub, isNested: boolean, filter: number): any;

        static castTraceStub(trace: TraceStub, a: any, stub: Stub, isNested: boolean): any;

        static castFrameStub(frame: FrameStub): any;

        private static _filterExceptionArray(trace: Record<string, string>[], a: any, filter: number);
    }
}