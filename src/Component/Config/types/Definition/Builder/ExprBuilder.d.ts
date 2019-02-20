declare namespace Jymfony.Component.Config.Definition.Builder {
    /**
     * This class builds an if expression.
     */
    export class ExprBuilder {
        public ifPart?: Invokable;
        public thenPart?: Invokable;
        protected _node: NodeDefinition;

        /**
         * Constructor.
         */
        __construct(node: NodeDefinition): void;
        constructor(node: NodeDefinition);

        /**
         * Marks the expression as being always used.
         */
        always(then?: Invokable): ExprBuilder;

        /**
         * Sets a closure to use as tests.
         *
         * The default one tests if the value is true.
         */
        ifTrue(closure?: Invokable): ExprBuilder;

        /**
         * Tests if the value is a string.
         */
        ifString(): ExprBuilder;

        /**
         * Tests if the value is null.
         */
        ifNull(): ExprBuilder;

        /**
         * Tests if the value is empty.
         */
        ifEmpty(): ExprBuilder;

        /**
         * Tests if the value is an array.
         */
        ifArray(): ExprBuilder;

        /**
         * Tests if the value is in an array.
         */
        ifInArray(array: any[]): ExprBuilder;

        /**
         * Tests if the value is not in an array.
         */
        ifNotInArray(array: any[]): ExprBuilder;

        /**
         * Transforms variables of any type into an array.
         */
        castToArray(): ExprBuilder;

        /**
         * Sets the closure to run if the test pass.
         */
        then(closure: Invokable): ExprBuilder;

        /**
         * Sets a closure returning an empty array.
         */
        thenEmptyArray(): ExprBuilder;

        /**
         * Sets a closure returning an empty object.
         */
        thenEmptyObject(): ExprBuilder;

        /**
         * Sets a closure marking the value as invalid at validation time.
         * If you want to add the value of the node in your message just use a %s placeholder.
         *
         * @throws {Jymfony.Component.Config.Definition.Exception.InvalidConfigurationException}
         */
        thenInvalid(message: string): ExprBuilder;

        /**
         * Sets a closure unsetting this key of the array at validation time.
         *
         * @throws {Jymfony.Component.Config.Definition.Exception.UnsetKeyException}
         */
        thenUnset(): ExprBuilder;

        /**
         * Returns the related node.
         *
         * @throws {RuntimeException}
         */
        end(): NodeDefinition|ArrayNodeDefinition|VariableNodeDefinition;

        /**
         * Builds the expressions.
         */
        static buildExpressions(expressions: ExprBuilder[]): Invokable[];
    }
}
