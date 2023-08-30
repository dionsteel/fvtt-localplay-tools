declare namespace socketlib {
  export class Socket {
    register(name: string, handler: AnyFunction) {};
    async executeAsGM(handler:string|AnyFunction, ...parameters);
    async executeAsUser(handler:string|AnyFunction, userId:string, ...parameters);
    async executeForAllGMs(handler:string|AnyFunction, ...parameters);
    async executeForOtherGMs(handler:string|AnyFunction, ...parameters);
    async executeForEveryone(handler:string|AnyFunction, ...parameters);
    async executeForOthers(handler:string|AnyFunction, ...parameters);
    async executeForUsers(handler:string|AnyFunction, userIds:string[], ...parameters);
  }
  export function registerModule(moduleName: string): socketlib.Socket;
}
