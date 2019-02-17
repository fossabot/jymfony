declare namespace Jymfony.Component.Config.Definition.Builder {
    import NodeInterface = Jymfony.Component.Config.Definition.NodeInterface;

    /**
     * This class provides a fluent interface for defining a node.
     */
    export abstract class NodeDefinition extends implementationOf(NodeParentInterface) implements NodeParentInterface {
        protected _parent: NodeParentInterface;
        protected _name: string;
        protected _normalization?: NormalizationBuilder;
        protected _validation?: ValidationBuilder;
        protected _default: any;
        protected _isDefault: boolean;
        protected _required: boolean;
        protected _deprecationMessage?: string;
        protected _merge?: MergeBuilder;
        protected _allowEmptyValue: boolean;
        protected _nullEquivalent: any;
        protected _trueEquivalent: any;
        protected _falseEquivalent: any;
        protected _attributes: Record<any, any>;

        /**
         * Constructor.
         */
        __construct(name: string, parent?: NodeParentInterface): void;
        constructor(name: string, parent?: NodeParentInterface);

        /**
         * Sets the parent node.
         */
        setParent(parent: NodeParentInterface): NodeDefinition;

        /**
         * Sets info message.
         *
         * @param info The info text
         */
        info(info: string): NodeDefinition;

        /**
         * Sets example configuration.
         *
         * @param example
         */
        example(example: any): NodeDefinition;

        /**
         * Sets an attribute on the node.
         */
        attribute(key: string, value: any): NodeDefinition;

        /**
         * Returns the parent node.
         */
        end(): NodeParentInterface|undefined;

        /**
         * Creates the node.
         *
         * @param [forceRootNode = false] Whether to force this node as the root node
         */
        getNode(forceRootNode?: boolean): NodeInterface;

        /**
         * Sets the default value.
         *
         * @param value The default value
         */
        defaultValue(value: any): NodeDefinition;

        /**
         * Sets the node as required.
         */
        isRequired(): NodeDefinition

        /**
         * Sets the node as deprecated.
         *
         * You can use %node% and %path% placeholders in your message to display,
         * respectively, the node name and its complete path.
         *
         * @param [message = 'The child node "%node%" at path "%path%" is deprecated.'] Deprecation message
         */
        setDeprecated(message?: string): NodeDefinition;

        /**
         * Sets the equivalent value used when the node contains null.
         */
        treatNullLike(value: any): NodeDefinition;

        /**
         * Sets the equivalent value used when the node contains true.
         */
        treatTrueLike(value: any): NodeDefinition;

        /**
         * Sets the equivalent value used when the node contains false.
         */
        treatFalseLike(value: any): NodeDefinition;

        /**
         * Sets null as the default value.
         */
        defaultNull(): NodeDefinition;

        /**
         * Sets undefined as the default value.
         */
        defaultUndefined(): NodeDefinition;

        /**
         * Sets true as the default value.
         */
        defaultTrue(): NodeDefinition;

        /**
         * Sets false as the default value.
         */
        defaultFalse(): NodeDefinition;

        /**
         * Sets an expression to run before the normalization.
         */
        beforeNormalization(): ExprBuilder;

        /**
         * Denies the node value being empty.
         */
        cannotBeEmpty(): NodeDefinition;

        /**
         * Sets an expression to run for the validation.
         *
         * The expression receives the value of the node and must return it. It can modify it.
         * An exception should be thrown when the node is not valid.
         */
        validate(): ExprBuilder;

        /**
         * Sets whether the node can be overwritten.
         *
         * @param [deny = true] Whether the overwriting is forbidden or not
         */
        cannotBeOverwritten(deny?: boolean): NodeDefinition;

        /**
         * Gets the builder for validation rules.
         */
        protected validation(): ValidationBuilder;

        /**
         * Gets the builder for merging rules.
         */
        protected merge(): MergeBuilder;

        /**
         * Gets the builder for normalization rules.
         */
        protected normalization(): NormalizationBuilder;

        /**
         * Instantiate and configure the node according to this definition.
         *
         * @throws {Jymfony.Component.Config.Exception.InvalidDefinitionException} When the definition is invalid
         */
        protected abstract createNode(): NodeInterface;
    }
}
