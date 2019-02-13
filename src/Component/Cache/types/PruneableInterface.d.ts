declare namespace Jymfony.Component.Cache {
    /**
     * Represents a pool that allow for pruning (deletion) of expired items.
     */
    export class PruneableInterface {
        /**
         * Prunes the cache pool.
         */
        prune(): Promise<boolean>;
    }
}
