declare namespace Jymfony.Component.Cache.DependencyInjection {
    import CompilerPassInterface = Jymfony.Component.DependencyInjection.Compiler.CompilerPassInterface;

    export class CachePoolPass extends implementationOf(CompilerPassInterface) implements CompilerPassInterface {
        /**
         * @inheritdoc
         */
        process(container: ContainerBuilder): void;

        /**
         * Gets a service provider name.
         *
         * @internal
         */
        static getServiceProvider(container: ContainerBuilder, name: string): string;

        private static _getNamespace(seed: string, id: string): string;
    }
}
