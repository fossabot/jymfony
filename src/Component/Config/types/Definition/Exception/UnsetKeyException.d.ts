declare namespace Jymfony.Component.Config.Definition.Exception {
    /**
     * This exception is usually not encountered by the end-user, but only used
     * internally to signal the parent scope to unset a key.
     */
    class UnsetKeyException extends Exception {
    }
}
