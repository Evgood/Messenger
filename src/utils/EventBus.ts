import { Listeners } from '../types';
class EventBus {

    private listeners: Listeners = {};

    public on(event: string, callback: Function): void {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }


    public off(event: string, callback: Function): void {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event] = this.listeners[event].filter((listener) => {
            return listener !== callback;
        });
    }


    public emit(event: string, ...args: string[]): void {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event].forEach((listener) => {
            listener(...args);
        });
    }
}

export default EventBus;
