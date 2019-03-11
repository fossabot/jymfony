declare namespace Jymfony.Component.Console.Output {
    import OutputFormatterInterface = Jymfony.Component.Console.Formatter.OutputFormatterInterface;

    export class ConsoleOutput extends mix(StreamOutput, ConsoleOutputInterface) {
        public errorOutput: Jymfony.Component.Console.Output.OutputInterface;

        /**
         * Constructor.
         *
         * @param {string} [verbosity = Jymfony.Component.Console.Output.ConsoleOutputInterface.VERBOSITY_NORMAL]
         * @param {boolean} [decorated]
         * @param {Jymfony.Component.Console.Output.OutputFormatterInterface} [formatter]
         */
        __construct(verbosity?: number, decorated?: boolean, formatter?: OutputFormatterInterface): void;
        constructor(verbosity?: number, decorated?: boolean, formatter?: OutputFormatterInterface);
    }
}
