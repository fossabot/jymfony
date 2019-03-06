declare namespace Jymfony.Component.Console.Input {
    class StreamableInputInterface extends InputInterface {
        /**
         * The input stream to read from when interacting with the user.
         * This is mainly useful for testing purpose.
         */
        public stream: NodeJS.ReadableStream;
    }
}
