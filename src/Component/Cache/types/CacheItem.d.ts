declare namespace Jymfony.Component.Cache {
    export class CacheItem<T> extends implementationOf(CacheItemInterface) implements CacheItemInterface<T> {
        private _key?: string;
        private _value?: T;
        private _isHit: boolean;
        private _expiry?: number;
        private _defaultLifetime?: number;
        private _tags: string[];

        /**
         * @inheritdoc
         */
        readonly key: string;

        /**
         * @inheritdoc
         */
        readonly isHit: boolean;

        /**
         * @inheritdoc
         */
        get(): T;

        /**
         * @inheritdoc
         */
        set(value: T): CacheItem<T>;

        /**
         * @inheritdoc
         */
        expiresAt(expiration: null|undefined|Jymfony.Component.DateTime.DateTime): CacheItem<T>;

        /**
         * @inheritdoc
         */
        expiresAfter(time: null|undefined|Jymfony.Component.DateTime.TimeSpan|number): CacheItem<T>;

        /**
         * Adds a tag to a cache item.
         *
         * @throws {Jymfony.Component.Cache.Exception.InvalidArgumentException} When tag is not valid
         */
        tag(tags: string|string[]): CacheItem<T>;

        /**
         * Throws exception if key is invalid.
         *
         * @throws {Jymfony.Component.Cache.Exception.InvalidArgumentException} When key is not a valid string key.
         */
        static validateKey(key: string);
    }
}
