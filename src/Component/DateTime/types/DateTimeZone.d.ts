declare namespace Jymfony.Component.DateTime {
    /**
     * The DateTimeZone represents a timezone definition.
     * To get one please use DateTimeZone.get method.
     */
    export class DateTimeZone {
        /**
         * Gets a DateTimeZone object for the specified timezone.
         *
         * @param {string} timezone
         *
         * @returns {DateTimeZone}
         */
        static get(timezone: string): DateTimeZone;

        /**
         * @returns {string[]}
         */
        static readonly identifiers: string[];

        /**
         * Gets the timezone name.
         *
         * @returns {string}
         */
        readonly name: string;

        /**
         * Get the offset for a given datetime or timestamp.
         *
         * @param {Jymfony.Component.DateTime.DateTime|int} datetime
         *
         * @returns {int|undefined}
         */
        getOffset(datetime: DateTime|number): number|undefined;

        /**
         * Gets the timezone abbrev name for a given timestamp or DateTime.
         *
         * @param {Jymfony.Component.DateTime.DateTime|int} datetime
         *
         * @returns {string}
         */
        getAbbrev(datetime: DateTime|number): string;

        /**
         * Checks if DST is applicable for a given timestamp or DateTime.
         *
         * @param {Jymfony.Component.DateTime.DateTime|int} datetime
         *
         * @returns {boolean}
         */
        isDST(datetime: DateTime|number): boolean;

        /**
         * Get the GMT offset for wall clock time.
         */
        private _getOffsetForWallClock(wallTimestamp: number): number;

        /**
         * Gets the data for a given timestamp or DateTime.
         */
        private _getData(datetime: DateTime|number): any[];

        /**
         * Loads a timezone by name/abbreviation or try to parse
         * a timezone correction.
         */
        private _load(timezone: string): void;
    }
}
