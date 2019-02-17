declare namespace Jymfony.Component.Config.Definition.Builder {
    export class ArrayNodeDefinition extends mix(NodeDefinition, ParentNodeDefinitionInterface) implements ParentNodeDefinitionInterface {
        protected _performDeepMerging: boolean;
        protected _ignoreExtraKeys: boolean;
        protected _removeExtraKeys: boolean;
        protected _children: Record<string, NodeBuilder>;
        protected _prototype?: NodeDefinition;
        protected _atLeastOne: boolean;
        protected _allowNewKeys: boolean;
        protected _addDefaults: boolean;
        protected _addDefaultChildren: boolean;
        protected _nodeBuilder?: NodeBuilder;
        private _key?: string;
        private _removeKeyItem?: boolean;
        private _normalizeKeys: boolean;

        /**
         * Constructor.
         */
        __construct(name: string, parent?: NodeParentInterface): void;
        constructor(name: string, parent?: NodeParentInterface);

        /**
         * Sets a custom children builder.
         */
        setBuilder(builder: NodeBuilder): void;

        /**
         * Returns a builder to add children nodes.
         */
        children(): NodeBuilder;

        /**
         * Sets a prototype for child nodes.
         */
        prototype(type: string): NodeDefinition;
        variablePrototype(): VariableNodeDefinition;
        scalarPrototype(): ScalarNodeDefinition;
        booleanPrototype(): BooleanNodeDefinition;
        integerPrototype(): IntegerNodeDefinition;
        floatPrototype(): FloatNodeDefinition;
        arrayPrototype(): ArrayNodeDefinition;
        enumPrototype(): EnumNodeDefinition;

        /**
         * Adds the default value if the node is not set in the configuration.
         *
         * This method is applicable to concrete nodes only (not to prototype nodes).
         * If this function has been called and the node is not set during the finalization
         * phase, it's default value will be derived from its children default values.
         */
        addDefaultsIfNotSet(): ArrayNodeDefinition;

        /**
         * Adds children with a default value when none are defined.
         *
         * This method is applicable to prototype nodes only.
         *
         * @param children The number of children|The child name|The children names to be added
         */
        addDefaultChildrenIfNoneSet(children?: number|string|string|null|undefined): ArrayNodeDefinition;

        /**
         * Requires the node to have at least one element.
         * This method is applicable to prototype nodes only.
         */
        requiresAtLeastOneElement(): ArrayNodeDefinition;

        /**
         * Disallows adding news keys in a subsequent configuration.
         * If used all keys have to be defined in the same configuration file.
         */
        disallowNewKeysInSubsequentConfigs(): ArrayNodeDefinition;

        /**
         * Sets the attribute which value is to be used as key.
         *
         * This is useful when you have an indexed array that should be an
         * object. You can select an item from within the array
         * to be the key of the particular item. For example, if "id" is the
         * "key", then:
         *
         *     [
         *         {id: "my_name", foo: "bar"},
         *     ];
         *
         *   becomes
         *
         *     {
         *         "my_name": {foo: "bar"},
         *     };
         *
         * If you'd like "'id': 'my_name'" to still be present in the result,
         * then you can set the second argument of this method to false.
         *
         * This method is applicable to prototype nodes only.
         *
         * @param name The name of the key
         * @param [removeKeyItem = true] Whether or not the key item should be removed
         */
        useAttributeAsKey(name: string, removeKeyItem?: boolean): ArrayNodeDefinition;

        /**
         * Sets whether the node can be unset.
         */
        canBeUnset(allow?: boolean): ArrayNodeDefinition;

        /**
         * Adds an "enabled" boolean to enable the current section.
         *
         * By default, the section is disabled. If any configuration is specified then
         * the node will be automatically enabled:
         *
         * enableableArrayNode: {enabled: true, ...}   # The config is enabled & default values get overridden
         * enableableArrayNode: ~                      # The config is enabled & use the default values
         * enableableArrayNode: true                   # The config is enabled & use the default values
         * enableableArrayNode: {other: value, ...}    # The config is enabled & default values get overridden
         * enableableArrayNode: {enabled: false, ...}  # The config is disabled
         * enableableArrayNode: false                  # The config is disabled
         */
        canBeEnabled(): ArrayNodeDefinition;

        /**
         * Adds an "enabled" boolean to enable the current section.
         * By default, the section is enabled.
         */
        canBeDisabled(): ArrayNodeDefinition;

        /**
         * Disables the deep merging of the node.
         */
        performNoDeepMerging(): ArrayNodeDefinition;

        /**
         * Allows extra config keys to be specified under an array without
         * throwing an exception.
         *
         * Those config values are simply ignored and removed from the
         * resulting array. This should be used only in special cases where
         * you want to send an entire configuration array through a special
         * tree that processes only part of the array.
         *
         * @param [remove = true] Whether to remove the extra keys
         */
        ignoreExtraKeys(remove?: boolean): ArrayNodeDefinition;

        /**
         * Sets key normalization.
         *
         * @param bool Whether to enable key normalization
         */
        normalizeKeys(bool: boolean): ArrayNodeDefinition;

        /**
         * Appends a node definition.
         *
         *     node = new ArrayNodeDefinition()
         *         .children()
         *             .scalarNode('foo').end()
         *             .scalarNode('baz').end()
         *         .end()
         *         .append(this.getBarNodeDefinition())
         *     ;
         */
        append(node: NodeParentInterface): ParentNodeDefinitionInterface;

        /**
         * Returns a node builder to be used to add children and prototype.
         */
        getNodeBuilder(): NodeBuilder;

        /**
         * @inheritdoc
         */
        protected createNode(): NodeInterface;

        /**
         * Validate the configuration of a concrete node.
         *
         * @throws {Jymfony.Component.Config.Definition.Exception.InvalidDefinitionException}
         */
        validateConcreteNode(node: NodeDefinition): void;

        /**
         * Validate the configuration of a prototype node.
         *
         * @throws {Jymfony.Component.Config.Definition.Exception.InvalidDefinitionException}
         */
        validatePrototypeNode(node: NodeDefinition): void;
    }
}
