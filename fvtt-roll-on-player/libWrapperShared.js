import SETTINGS from "./Settings";
class Registration {
    constructor() {
        this.nextId = 0;
        this.wrappers = new Map();
    }
    handler(context, wrapped, ...args) {
        let current = wrapped;
        for (const wrapper of this.wrappers.values()) {
            const next = current;
            current = (...args) => wrapper.call(context, next, ...args);
        }
        return current.call(context, ...args);
    }
}
class libWrapperShared {
    static register(target, handler) {
        let registration = this.registrations.get(target);
        if (!registration) {
            registration = new Registration();
            libWrapper.register(SETTINGS.MOD_NAME, target, function (wrapped, ...args) { return registration === null || registration === void 0 ? void 0 : registration.handler(this, wrapped, ...args); }, 'WRAPPER');
            this.registrations.set(target, registration);
        }
        const id = registration.nextId++;
        registration.wrappers.set(id, handler);
        return id;
    }
    static unregister(target, id) {
        const registration = this.registrations.get(target);
        if (!registration)
            return false;
        registration.wrappers.delete(id);
        if (registration.wrappers.size === 0) {
            libWrapper.unregister(SETTINGS.MOD_NAME, target, false);
            this.registrations.delete(target);
        }
        return true;
    }
}
libWrapperShared.registrations = new Map();
export default libWrapperShared;
