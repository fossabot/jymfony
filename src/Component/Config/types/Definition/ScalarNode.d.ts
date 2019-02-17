declare namespace Jymfony.Component.Config.Definition {
    class ScalarNode extends VariableNode {
        /**
         * @inheritdoc
         */
        validateType(value: any): void;

        /**
         * @inheritdoc
         */
        isValueEmpty(value: any): boolean;
    }
}
