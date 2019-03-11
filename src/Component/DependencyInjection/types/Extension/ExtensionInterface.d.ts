declare namespace Jymfony.Component.DependencyInjection.Extension {
    import ConfigurationInterface = Jymfony.Component.Config.Definition.ConfigurationInterface;
    import ContainerBuilder = Jymfony.Component.DependencyInjection.ContainerBuilder;

    export class ExtensionInterface implements MixinInterface {
        public static readonly definition: Newable<ExtensionInterface>;

        /**
         * Namespace to be used for this extension.
         */
        readonly namespace: string;

        /**
         * Configuration alias.
         */
        readonly alias: string;

        /**
         * Base path for the XSD files.
         */
        readonly xsdValidationBasePath: string;

        /**
         * Loads a configuration.
         */
        load(configs: any[], container: ContainerBuilder): void;

        /**
         * Returns the extension configuration object.
         */
        getConfiguration(): ConfigurationInterface;
    }
}
