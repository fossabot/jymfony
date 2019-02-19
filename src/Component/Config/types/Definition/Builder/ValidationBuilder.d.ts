declare namespace Jymfony.Component.Config.Definition.Builder {
    /**
     * This class builds validation conditions.
     */
    export class ValidationBuilder {
        public rules: (Invokable|ExprBuilder)[];
        protected _node: NodeDefinition;

        /**
         * Constructor.
         */
        __construct(node: NodeDefinition): void;
        constructor(node: NodeDefinition);

        /**
         * Sets whether the node can be unset.
         */
        rule(closure?: Invokable): ExprBuilder|ValidationBuilder;
    }
}
