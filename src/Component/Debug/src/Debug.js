const BufferingLogger = Jymfony.Component.Debug.BufferingLogger;
const ErrorHandler = Jymfony.Component.Debug.ErrorHandler;
const MultipleResolvesException = Jymfony.Component.Debug.Exception.MultipleResolvesException;
const UnhandledRejectionException = Jymfony.Component.Debug.Exception.UnhandledRejectionException;

/**
 * @memberOf Jymfony.Component.Debug
 */
export default class Debug {
    static enable() {
        __jymfony.autoload.debug = true;

        process.on('unhandledRejection', (reason, p) => {
            throw new UnhandledRejectionException(p, reason instanceof Error ? reason : undefined);
        });

        process.on('multipleResolves', (type, promise, reason) => {
            if (promise.__multipleResolve) {
                return;
            }

            throw new MultipleResolvesException(type, promise, reason);
        });

        __jymfony.ManagedProxy.enableDebug();
        ErrorHandler.register(new ErrorHandler(new BufferingLogger(), true));
    }
}
