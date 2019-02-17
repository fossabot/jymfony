declare namespace Jymfony.Component.Config.Definition.Builder {
    /**
     * This class builds normalization conditions.
     */
    export class NormalizationBuilder {
        public node: NodeDefinition;
        public $before: (Function|ExprBuilder)[];
        public $remappings: [string, string][];

        /**
         * Constructor.
         */
        __construct(node: NodeDefinition): void;
        constructor(node: NodeDefinition);

        /**
         * Registers a key to remap to its plural form.
         *
         * @param key The key to remap
         * @param [plural] The plural of the key in case of irregular plural
         */
        remap(key: string, plural?: string): NormalizationBuilder;

        /**
         * Registers a closure to run before the normalization or an expression builder to build it if null is provided.
         */
        before(closure?: Function): NormalizationBuilder|ExprBuilder;
    }
}
