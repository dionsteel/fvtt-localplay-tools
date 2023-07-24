export type AnyFunction = Function;
declare global {
  namespace socketlib {
    export class Socket {
      register(name: string, handler: AnyFunction);
      executeAsGM(handler: string | AnyFunction, ...parameters): Promise<any>;
      executeAsUser(
        handler: string | AnyFunction,
        userId: string,
        ...parameters
      ): Promise<any>;
      executeForAllGMs(
        handler: string | AnyFunction,
        ...parameters
      ): Promise<any>;
      executeForOtherGMs(
        handler: string | AnyFunction,
        ...parameters
      ): Promise<any>;
      executeForEveryone(
        handler: string | AnyFunction,
        ...parameters
      ): Promise<any>;
      executeForOthers(
        handler: string | AnyFunction,
        ...parameters
      ): Promise<any>;
      executeForUsers(
        handler: string | AnyFunction,
        userIds: string[],
        ...parameters
      ): Promise<any>;
    }
    export function registerModule(moduleName: string): socketlib.Socket;
  }
}
