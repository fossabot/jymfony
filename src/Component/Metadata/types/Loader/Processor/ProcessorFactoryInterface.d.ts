declare namespace Jymfony.Component.Metadata.Loader.Processor {
    export class ProcessorFactoryInterface {
        public static readonly definition: Newable<ProcessorFactoryInterface>;

        /**
         * Get a processor able to handle $subject.
         */
        getProcessor(subject: any): ProcessorInterface | null;
    }
}
