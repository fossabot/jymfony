declare namespace Jymfony.Component.DependencyInjection.Compiler {
    import ContainerBuilder = Jymfony.Component.DependencyInjection.ContainerBuilder;

    export class CompilerPassInterface {
        /**
         * Modify container.
         */
        process(container: ContainerBuilder): void;
    }
}
