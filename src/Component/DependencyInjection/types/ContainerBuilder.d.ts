interface Newable<T> {
    new(...args: any[]): T;
}

declare namespace Jymfony.Component.DependencyInjection {
    import CompilerPassInterface = Jymfony.Component.DependencyInjection.Compiler.CompilerPassInterface;
    type ServiceIdentifier = string|symbol|Newable<any>;

    class ContainerBuilder extends Container {
        constructor(parameterBag: ParameterBag);

        /**
         * Sets the track resources flag.
         */
        setResourceTracking(track: boolean): void;

        /**
         * Checks if resources are tracked.
         */
        isTrackingResources(): boolean;

        /**
         * Registers an extension.
         */
        registerExtension(extension: ExtensionInterface): void;

        /**
         * Returns an extension by alias.
         *
         * @throws {LogicException}
         */
        getExtension(name: string): ExtensionInterface;

        /**
         * Returns all registered extensions.
         */
        getExtensions(): Record<string, ExtensionInterface>

        /**
         * Checks if we have an extension.
         */
        hasExtension(name: string): boolean;

        /**
         * Returns an array of resources used to build this configuration.
         */
        getResources(): ResourceInterface[];

        /**
         * Adds a resource for this configuration.
         */
        addResource(resource: ResourceInterface): ContainerBuilder;

        /**
         * Adds the object class hierarchy as resources.
         *
         * @param {*} object An object instance
         *
         * @returns {Jymfony.Component.DependencyInjection.ContainerBuilder}
         */
        addObjectResource(object: any): ContainerBuilder;

        /**
         * Retrieves the requested reflection class and registers it for resource tracking.
         *
         * @throws {ReflectionException} when a parent class/interface/trait is not found and $throw is true
         *
         * @final
         */
        getReflectionClass(Class: string, Throw?: boolean): ReflectionClass;

        /**
         * Adds the given class hierarchy as resources.
         */
        addClassResource(reflClass: ReflectionClass): ContainerBuilder;

        /**
         * Loads the configuration for an extension.
         */
        loadFromExtension(extension: string, values?: Record<string, any>): ContainerBuilder;

        /**
         * Adds a compilation pass.
         */
        addCompilerPass(pass: CompilerPassInterface, type?: string, priority?: number): ContainerBuilder;

        /**
         * Gets the compiler.
         */
        getCompiler(): Compiler;

        /**
         * Sets a service.
         *
         * @throws {Jymfony.Component.DependencyInjection.Exception.BadMethodCallException} When trying to set a non-synthetic service into a frozen container
         */
        set(id: ServiceIdentifier, service: any): void;

        /**
         * Removes a definition.
         */
        removeDefinition(id: string): void;

        /**
         * Checks if has a service.
         */
        has(id: ServiceIdentifier): boolean;

        /**
         * Gets a service.
         *
         * @returns {*}
         */
        get<T>(id: Newable<T>, invalidBehavior?: number): T;
        get(id: string|symbol, invalidBehavior?: number): any;

        /**
         * Merges a container into this one.
         * Services definition are overwritten by the merged container,
         * while parameters are kept from this one.
         */
        merge(container: ContainerBuilder): void;

        /**
         * Returns the configuration object for the given extension.
         */
        getExtensionConfig(name: string): any;

        /**
         * Prepends a configuration object to the extension configs.
         *
         * @param {string} name
         * @param {Object} config
         */
        prependExtensionConfig(name: string, config: any): void;

        /**
         * Compiles the container:
         *
         *  - Merge extensions configurations
         *  - Resolve parameters value
         *  - Freeze
         */
        compile(): void;

        /**
         * @inheritdoc
         */
        getServiceIds(): string[];

        /**
         * Adds service aliases.
         */
        addAliases(aliases: Record<string, string|Alias>): void;

        /**
         * Sets service aliases.
         *
         * @param {Object.<string, string|Jymfony.Component.DependencyInjection.Alias>} aliases
         */
        setAliases(aliases: Record<string, string|Alias>): void;

        /**
         * Sets an alias for an existing service.
         */
        setAlias(alias: string, id: string|Alias): Alias;

        /**
         * Removes an alias.
         */
        removeAlias(alias: string): void;

        /**
         * Checks whether an alias exists.
         */
        hasAlias(alias: string|Newable<any>): boolean;

        /**
         * Gets all defined aliases.
         *
         * @returns {Object.<string, Jymfony.Component.DependencyInjection.Alias>}
         */
        getAliases(): Record<string, Alias>;

        /**
         * Gets an alias.
         *
         * @param {string} id
         *
         * @returns {Jymfony.Component.DependencyInjection.Alias}
         */
        getAlias(id: string): Alias;

        /**
         * Registers a service definition.
         * This methods allows for simple registration of service definition
         * with a fluid interface.
         */
        register(id: ServiceIdentifier, class_?: string|Newable<any>): Definition;

        /**
         * Adds the service definitions.
         *
         * @param {Jymfony.Component.DependencyInjection.Definition[]} definitions
         */
        addDefinitions(definitions: Definition[]): void;

        /**
         * Sets the service definitions.
         *
         * @param {Jymfony.Component.DependencyInjection.Definition[]} definitions
         */
        setDefinitions(definitions: Definition[]): void;

        /**
         * Gets all service definitions.
         *
         * @returns {Object.<string, Jymfony.Component.DependencyInjection.Definition>}
         */
        getDefinitions(): Record<string, Definition>;

        /**
         * Sets a service definition.
         *
         * @throws {Jymfony.Component.DependencyInjection.Exception.BadMethodCallException} When this ContainerBuilder is frozen
         */
        setDefinition(id: ServiceIdentifier, definition: Definition): Definition;

        /**
         * Returns true if a service definition exists under the given identifier.
         *
         * @param {string} id
         *
         * @returns {boolean}
         */
        hasDefinition(id: ServiceIdentifier): boolean;

        /**
         * Gets a service definition.
         *
         * @throws {Jymfony.Component.DependencyInjection.Exception.ServiceNotFoundException} If the service definition does not exist
         */
        getDefinition(id: ServiceIdentifier): Definition;

        /**
         * Gets a service definition by id or alias.
         * The method "unaliases" recursively to return a Definition instance.
         *
         * @param {string} id
         *
         * @returns {Jymfony.Component.DependencyInjection.Definition} A Definition instance
         *
         * @throws {Jymfony.Component.DependencyInjection.Exception.ServiceNotFoundException} If the service definition does not exist
         */
        findDefinition(id) {
            id = Container.normalizeId(id);

            while (this._aliasDefinitions[id]) {
                id = this._aliasDefinitions[id].toString();
            }

            return this.getDefinition(id);
        }

        /**
         * Creates a service for a service definition.
         *
         * @param {Jymfony.Component.DependencyInjection.Definition} definition
         * @param {undefined|string} id
         * @param {boolean} [tryProxy = true]
         *
         * @returns {*} The service described by the service definition
         *
         * @throws {Jymfony.Component.DependencyInjection.Exception.RuntimeException} When the factory definition is incomplete or when the service is a synthetic service
         * @throws {Jymfony.Component.DependencyInjection.Exception.InvalidArgumentException} When configure callable is not callable
         */
        _createService(definition, id, tryProxy = true) {
            if (definition.isSynthetic()) {
                throw new RuntimeException('You have requested a synthetic service ("' + id + '"). The DIC does not know how to construct this service.');
            }

            if (definition.isDeprecated()) {
                __jymfony.trigger_deprecated(definition.getDeprecationMessage(id));
            }

            if (tryProxy && definition.isLazy()) {
                const proxy = this._getProxyInstantiator()
                    .instantiateProxy(this, definition, id, () => this._createService(definition, id, false));

                this._shareService(definition, proxy, id);
                return proxy;
            }

            const parameterBag = this.parameterBag;

            const args = this._resolveServices(parameterBag.unescapeValue(parameterBag.resolveValue(definition.getArguments())));
            let factory = definition.getFactory();
            const module = definition.getModule();

            let service;

            if (module) {
                const [m, property] = module;

                service = require(m);
                if (undefined !== property) {
                    service = new service[property](...args);
                }
            } else if (factory) {
                if (isArray(factory)) {
                    factory = getCallableFromArray([this._resolveServices(parameterBag.resolveValue(factory[0])), factory[1]]);
                } else if (!isFunction(factory)) {
                    throw new RuntimeException('Cannot create service "' + id + '" because of invalid factory');
                }

                service = factory(...args);
            } else {
                const class_ = parameterBag.resolveValue(definition.getClass());
                const constructor = ReflectionClass.getClass(class_ || id);

                service = new constructor(...args);
            }

            if (tryProxy || !definition.isLazy()) {
                this._shareService(definition, service, id);
            }

            const properties = this._resolveServices(parameterBag.unescapeValue(parameterBag.resolveValue(definition.getProperties())));
            for (const [name, value] of __jymfony.getEntries(properties)) {
                service[name] = value;
            }

            for (const call of definition.getMethodCalls()) {
                this._callMethod(service, call);
            }

            let configurator = definition.getConfigurator();
            if (configurator) {
                if (isArray(configurator)) {
                    configurator[0] = parameterBag.resolveValue(configurator[0]);

                    if (configurator[0] instanceof Reference) {
                        configurator[0] = this.get(configurator[0].toString(), configurator[0].invalidBehavior);
                    } else if (configurator[0] instanceof Definition) {
                        configurator[0] = this._createService(configurator[0], undefined);
                    }

                    configurator = getCallableFromArray(configurator);
                }

                if (!isFunction(configurator)) {
                    throw new InvalidArgumentException('The configure callable for class "' + service.constructor.name + '" is not a callable.');
                }

                configurator(service);
            }

            for (const call of definition.getShutdownCalls()) {
                this.registerShutdownCall(this._getFunctionCall(service, call));
            }

            return service;
        }

        /**
         * Returns service ids for a given tag.
         *
         * @param {string} name
         *
         * @returns {Object.<string, Object>}
         */
        findTaggedServiceIds(name) {
            const tags = {};

            for (const [id, definition] of __jymfony.getEntries(this._definitions)) {
                if (definition.hasTag(name)) {
                    tags[id] = definition.getTag(name);
                }
            }

            return tags;
        }

        /**
         * Returns all the defined tags.
         *
         * @returns {string[]}
         */
        findTags() {
            const tags = new Set();
            for (const definition of this._definitions) {
                for (const tag of Object.keys(definition.getTags())) {
                    tags.add(tag);
                }
            }

            return Array.from(tags);
        }

        /**
         * @param {Jymfony.Component.DependencyInjection.Compiler.CompilerPassInterface} pass
         * @param {string} message
         *
         * @final
         */
        log(pass, message) {
            this.getCompiler().log(pass, message);
        }

        /**
         * Returns the service conditionals.
         *
         * @param {*} value
         *
         * @returns {Array}
         */
        static getServiceConditionals(value) {
            const services = new Set();

            if (isArray(value)) {
                for (const v of value) {
                    __self.getServiceConditionals(v).forEach(service => services.add(service));
                }
            } else if (value instanceof Reference && value.invalidBehavior === Container.IGNORE_ON_INVALID_REFERENCE) {
                services.add(value.toString());
            }

            return Array.from(services);
        }

        /**
         * Returns the initialized conditionals.
         *
         * @param {*} value
         *
         * @returns {Array}
         *
         * @internal
         */
        static getInitializedConditionals(value) {
            const services = new Set();

            if (isArray(value)) {
                for (const v of value) {
                    __self.getInitializedConditionals(v).forEach(service => services.add(service));
                }
            } else if (value instanceof Reference && Container.IGNORE_ON_UNINITIALIZED_REFERENCE === value.invalidBehavior) {
                services.add(value.toString());
            }

            return Array.from(services);
        }

        /**
         * Computes a reasonably unique hash of a value.
         *
         * @param {*} value A serializable value
         *
         * @returns {string}
         */
        static hash(value) {
            const hash = crypto.createHash('sha256');
            hash.update(__jymfony.serialize(value));

            return __jymfony.strtr(hash.digest('base64').substr(0, 7), {
                '/': '.',
                '+': '_',
            });
        }

        /**
         * Retrieve the currently set proxy instantiator or create a new one.
         *
         * @returns {Jymfony.Component.DependencyInjection.LazyProxy.InstantiatorInterface}
         *
         * @private
         */
        _getProxyInstantiator() {
            if (undefined === this._proxyInstantiator) {
                this._proxyInstantiator = new RealServiceInstantiator();
            }

            return this._proxyInstantiator;
        }

        /**
         * Calls a method when creating service
         *
         * @param {*} service
         * @param {Array} call
         *
         * @private
         */
        _callMethod(service, call) {
            this._getFunctionCall(service, call)();
        }

        /**
         * Gets a method call bound to a service and its arguments.
         *
         * @param {*} service
         * @param {Array} call
         *
         * @returns {Function}
         *
         * @private
         */
        _getFunctionCall(service, call) {
            const services = __self.getServiceConditionals(call[1]);
            for (const service of services) {
                if (!this.has(service)) {
                    return;
                }
            }

            for (const service of __self.getInitializedConditionals(call[1])) {
                if (!this._doGet(service, Container.IGNORE_ON_UNINITIALIZED_REFERENCE)) {
                    return;
                }
            }

            call = getCallableFromArray([service, call[0]]);
            return () => call.apply(service, this._resolveServices(this.parameterBag.unescapeValue(this.parameterBag.resolveValue(call[1]))));
        }

        /**
         * Shares a service in the container.
         *
         * @param {Jymfony.Component.DependencyInjection.Definition} definition
         * @param {*} service
         * @param {string} id
         *
         * @private
         */
        _shareService(definition, service, id) {
            if (!definition.isShared()) {
                return;
            }

            this._services[id] = service;
        }

        /**
         * Replaces service references by the real service instance.
         *
         * @param {*} value
         *
         * @returns {*}
         *
         * @private
         */
        _resolveServices(value) {
            if (value instanceof Map) {
                for (const [k, v] of value.entries()) {
                    value.set(k, this._resolveServices(v));
                }
            } else if (value instanceof ServiceClosureArgument) {
                value = () => {
                    return this._resolveServices(value.values[0]);
                };
            } else if (value instanceof IteratorArgument) {
                const self = this;
                value = new RewindableGenerator(function* () {
                    for (const [k, v] of __jymfony.getEntries(value.values)) {
                        const conditionals = __self.getServiceConditionals(v);
                        let y = true;
                        for (const s of conditionals) {
                            if (!self.has(s)) {
                                y = false;
                                break;
                            }
                        }

                        if (!y) {
                            continue;
                        }

                        for (const s of conditionals) {
                            if (!self._doGet(s, Container.IGNORE_ON_UNINITIALIZED_REFERENCE)) {
                                y = false;
                                break;
                            }
                        }

                        if (!y) {
                            continue;
                        }

                        yield [k, self._resolveServices(v)];
                    }
                }, () => {
                    let count = 0;
                    for (const v of value.values) {
                        const conditionals = __self.getServiceConditionals(v);
                        let y = true;
                        for (const s of conditionals) {
                            if (!this.has(s)) {
                                y = false;
                                break;
                            }
                        }

                        if (!y) {
                            continue;
                        }

                        for (const s of conditionals) {
                            if (!this._doGet(s, Container.IGNORE_ON_UNINITIALIZED_REFERENCE)) {
                                y = false;
                                break;
                            }
                        }

                        if (!y) {
                            continue;
                        }

                        ++count;
                    }

                    return count;
                });
            } else if (value instanceof Reference) {
                value = this._doGet(value.toString(), value.invalidBehavior);
            } else if (value instanceof Definition) {
                value = this._createService(value, undefined);
            } else if (value instanceof Parameter) {
                value = this.getParameter(value.toString());
            }

            return value;
        }
    }
}
