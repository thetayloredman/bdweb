// BDWeb

// Main event emitter class
class __bdweb__BDWebEventEmitter {
    constructor() {
        this.listeners = {};
    }

    on(event, listener) {
        if (this.listeners[event]) {
            this.listeners[event].push(listener);
        } else {
            this.listeners[event] = [];
            this.listeners[event].push(listener);
        }
    }
}