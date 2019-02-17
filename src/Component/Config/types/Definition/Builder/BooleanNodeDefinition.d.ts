declare namespace Jymfony.Component.Config.Definition.Builder {
    import BooleanNode = Jymfony.Component.Config.Definition.BooleanNode;

    /**
     * This class provides a fluent interface for defining a node.
     */
    export class BooleanNodeDefinition extends ScalarNodeDefinition {
        /**
         * Constructor.
         */
        __construct(name: string, parent?: NodeParentInterface): void;
        constructor(name: string, parent?: NodeParentInterface);

        /**
         * @inheritdoc
         */
        instantiateNode(): BooleanNode;

        /**
         * Denies the node value being empty.
         *
         * @throws {Jymfony.Component.Config.Definition.Exception.InvalidDefinitionException}
         */
        cannotBeEmpty(): NodeDefinition;
    }
}
