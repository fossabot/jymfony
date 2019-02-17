declare namespace Jymfony.Component.DependencyInjection.Compiler {
    import ContainerBuilder = Jymfony.Component.DependencyInjection.ContainerBuilder;

    export class MergeExtensionConfigurationPass extends implementationOf(CompilerPassInterface) implements CompilerPassInterface {
        /**
         * @inheritdoc
         */
        process(container: ContainerBuilder): void;
    }
}
