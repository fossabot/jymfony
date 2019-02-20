declare namespace Jymfony.Component.Config.Definition.Builder {
    /**
     * This class builds merge conditions.
     */
    export class MergeBuilder {
        public allowFalse: boolean;
        public allowOverwrite: boolean;
        protected _node: NodeDefinition;

        /**
         * Constructor.
         */
        __construct(node: NodeDefinition): void;
        constructor(node: NodeDefinition);

        /**
         * Sets whether the node can be unset.
         */
        allowUnset(allow?: boolean): MergeBuilder;

        /**
         * Sets whether the node can be overwritten.
         */
        denyOverwrite(deny?: boolean): MergeBuilder;

        /**
         * Returns the related node.
         */
        end(): NodeDefinition|ArrayNodeDefinition|VariableNodeDefinition;
    }
}
