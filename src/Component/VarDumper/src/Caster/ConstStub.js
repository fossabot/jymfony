const Stub = Jymfony.Component.VarDumper.Cloner.Stub;

/**
 * Represents a constant and its value.
 *
 * @memberOf Jymfony.Component.VarDumper.Caster
 */
class ConstStub extends Stub {
    /**
     * Constructor.
     *
     * @param {string} name
     * @param {*} value
     */
    __construct(name, value = undefined) {
        super.__construct();

        this.class_ = name;
        this.value = undefined !== value ? value : name;

        if (isObject(this.value)) {
            this.type = Stub.TYPE_OBJECT;
        } else if (isArray(this.value)) {
            this.type = Stub.TYPE_ARRAY;
        } else {
            this.type = Stub.TYPE_STRING;
        }
    }

    toString() {
        return this.value.toString();
    }
}

module.exports = ConstStub;