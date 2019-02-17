const ScalarNodeDefinition = Jymfony.Component.Config.Definition.Builder.ScalarNodeDefinition;
const InvalidDefinitionException = Jymfony.Component.Config.Definition.Exception.InvalidDefinitionException;
declare namespace Jymfony.Component.Config.Definition.Builder {
    /**
     * Abstract class that contains common code of integer and float node definitions.
     *
     * @memberOf Jymfony.Component.Config.Definition.Builder
     *
     * @abstract
     */
    export abstract class NumericNodeDefinition extends ScalarNodeDefinition {
        protected _min: number|undefined;
        protected _max: number|undefined;

        /**
         * Constructor.
         */
        __construct(name: string, parent?: NodeParentInterface): void;
        constructor(name: string, parent?: NodeParentInterface);

        /**
         * Ensures that the value is smaller than the given reference.
         *
         * @throws {InvalidArgumentException} when the constraint is inconsistent
         */
        max(max: number|undefined): NumericNodeDefinition;

        /**
         * Ensures that the value is bigger than the given reference.
         *
         * @throws {InvalidArgumentException} when the constraint is inconsistent
         */
        min(min: number|undefined): NumericNodeDefinition;

        /**
         * @inheritdoc
         *
         * @throws {Jymfony.Component.Config.Definition.Exception.InvalidDefinitionException}
         */
        cannotBeEmpty(): NodeDefinition;
    }
}
