declare namespace Jymfony.Component.Config.Definition.Builder {
    import EnumNode = Jymfony.Component.Config.Definition.EnumNode;

    /**
     * Enum Node Definition.
     *
     * @memberOf Jymfony.Component.Config.Definition.Builder
     */
    export class EnumNodeDefinition extends ScalarNodeDefinition {
        private _values: any[];

        /**
         * Constructor.
         */
        __construct(name: string, parent?: NodeParentInterface): void;

        constructor(name: string, parent?: NodeParentInterface);

        /**
         * Sets allowed values for this node.
         */
        values(values: any[]): EnumNodeDefinition;

        /**
         * @inheritdoc
         */
        instantiateNode(): EnumNode;
    }
}
