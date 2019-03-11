declare namespace Jymfony.Component.Config.Definition.Builder {
    /**
     * An interface that must be implemented by nodes which can have children.
     */
    export class ParentNodeDefinitionInterface implements MixinInterface {
        public static readonly definition: Newable<ParentNodeDefinitionInterface>;

        /**
         * Returns a builder to add children nodes.
         */
        children(): NodeBuilder;

        /**
         * Appends a node definition.
         */
        append(node: NodeDefinition): ParentNodeDefinitionInterface;

        /**
         * Sets a custom children builder.
         */
        setBuilder(builder: NodeBuilder): void;
    }
}
