declare namespace Jymfony.Component.Config.Definition.Builder {
    /**
     * This class provides a fluent interface for building a node.
     */
    export class NodeBuilder extends implementationOf(NodeParentInterface) implements NodeParentInterface {
        protected _parent: ParentNodeDefinitionInterface;
        private _nodeMapping: Record<string, string>;

        /**
         * Constructor.
         */
        __construct(): void;
        constructor();

        /**
         * Set the parent node.
         */
        setParent(parent?: ParentNodeDefinitionInterface): NodeBuilder;

        /**
         * Creates a child array node.
         */
        arrayNode(name: string): ArrayNodeDefinition;

        /**
         * Creates a child scalar node.
         */
        scalarNode(name: string): ScalarNodeDefinition;

        /**
         * Creates a child Boolean node.
         */
        booleanNode(name: string): BooleanNodeDefinition;

        /**
         * Creates a child integer node.
         */
        integerNode(name: string): IntegerNodeDefinition;

        /**
         * Creates a child float node.
         */
        floatNode(name: string): FloatNodeDefinition;

        /**
         * Creates a child EnumNode.
         */
        enumNode(name: string): EnumNodeDefinition;

        /**
         * Creates a child variable node.
         *
         * @param name The name of the node
         *
         * @returns The builder of the child node
         */
        variableNode(name: string): VariableNodeDefinition;

        /**
         * Returns the parent node.
         *
         * @returns The parent node
         */
        end(): ParentNodeDefinitionInterface|NodeDefinition;

        /**
         * Creates a child node.
         *
         * @param name The name of the node
         * @param type The type of the node
         *
         * @returns The child node
         *
         * @throws {RuntimeException} When the node type is not registered
         * @throws {RuntimeException} When the node class is not found
         */
        node(name: string, type: string): NodeDefinition;

        /**
         * Appends a node definition.
         *
         * Usage:
         *
         *     node = new ArrayNodeDefinition('name')
         *         .children()
         *             .scalarNode('foo').end()
         *             .scalarNode('baz').end()
         *             .append(this.getBarNodeDefinition())
         *         .end()
         *     ;
         */
        append(node: NodeDefinition): NodeBuilder;

        /**
         * Adds or overrides a node Type.
         *
         * @param type The name of the type
         * @param className The fully qualified name the node definition class
         */
        setNodeClass(type: string, className: string): NodeBuilder;

        /**
         * Returns the class name of the node definition.
         *
         * @param type The node type
         *
         * @returns The node definition class name
         *
         * @throws {RuntimeException} When the node type is not registered
         * @throws {RuntimeException} When the node class is not found
         */
        protected _getNodeClass(type: string): string;
    }
}
