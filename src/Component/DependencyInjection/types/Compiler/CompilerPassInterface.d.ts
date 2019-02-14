declare namespace Jymfony.Component.DependencyInjection.Compiler {
    export class CompilerPassInterface {
        /**
         * Modify container.
         */
        process(container: ContainerBuilder): void;
    }
}
