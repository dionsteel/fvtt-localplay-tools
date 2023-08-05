/**
 * A helper Dialog subclass for completing a long rest.
 *
 * @param {Actor5e} actor           Actor that is taking the long rest.
 * @param {object} [dialogData={}]  An object of dialog data which configures how the modal window is rendered.
 * @param {object} [options={}]     Dialog rendering options.
 */
declare class LongRestDialog {
  /** @inheritDoc */
  static get defaultOptions(): any;
  /**
   * A helper constructor function which displays the Long Rest confirmation dialog and returns a Promise once it's
   * workflow has been resolved.
   * @param {object} [options={}]
   * @param {Actor5e} [options.actor]  Actor that is taking the long rest.
   * @returns {Promise}                Promise that resolves when the rest is completed or rejects when canceled.
   */
  static longRestDialog({ actor }?: { actor?: Actor5e }): Promise<any>;
  constructor(actor: any, dialogData?: {}, options?: {});
  actor: any;
  /** @inheritDoc */
  getData(): any;
}
