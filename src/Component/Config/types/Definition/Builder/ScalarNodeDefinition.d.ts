declare namespace Jymfony.Component.Config.Definition.Builder {
    import ScalarNode = Jymfony.Component.Config.Definition.ScalarNode;

    /**
     * This class provides a fluent interface for defining a node.
     */
    export class ScalarNodeDefinition extends VariableNodeDefinition {
        /**
         * @inheritdoc
         */
        instantiateNode(): ScalarNode;
    }
}
