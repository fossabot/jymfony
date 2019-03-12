declare namespace Jymfony.Component.Console.Question.Builder {
    export class ChoiceQuestionBuilder extends QuestionBuilder {
        private _type: string;
        private _choices: Choice[];
        private _default: Choice | undefined;
        private _prompt: string;

        /**
         * Constructor.
         *
         * @param {Jymfony.Component.Console.Question.Builder.QuestionBuilder} builder
         */
        // @ts-ignore
        __construct(builder: QuestionBuilder): void;
        constructor(builder: QuestionBuilder);

        /**
         * Adds a choice to the builder.
         */
        addChoice(choice: string | Choice, value?: any): ChoiceQuestionBuilder;

        /**
         * Sets the choices of the builder.
         */
        setChoices(choices: Choice[]): ChoiceQuestionBuilder;

        /**
         * Sets the default choice.
         */
        // @ts-ignore
        setDefault(defaultChoice: any): ChoiceQuestionBuilder;

        /**
         * Sets the choice question mode.
         * Should be one of the ChoiceQuestion.MODE_* constants.
         */
        setMode(mode: string): ChoiceQuestionBuilder;

        /**
         * Sets if this choice question allows multiple choices.
         *
         * @param {boolean} multiple
         *
         * @returns {Jymfony.Component.Console.Question.Builder.ChoiceQuestionBuilder}
         */
        setMultiple(multiple: boolean): ChoiceQuestionBuilder;

        // @ts-ignore
        build(): ChoiceQuestion;
    }
}
