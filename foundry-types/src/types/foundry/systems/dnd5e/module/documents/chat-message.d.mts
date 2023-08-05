/**
 * Highlight critical success or failure on d20 rolls.
 * @param {ChatMessage} message  Message being prepared.
 * @param {HTMLElement} html     Rendered contents of the message.
 * @param {object} data          Configuration data passed to the message.
 */
export function highlightCriticalSuccessFailure(message: ChatMessage, html: HTMLElement, data: object): void;
/**
 * Optionally hide the display of chat card action buttons which cannot be performed by the user
 * @param {ChatMessage} message  Message being prepared.
 * @param {HTMLElement} html     Rendered contents of the message.
 * @param {object} data          Configuration data passed to the message.
 */
export function displayChatActionButtons(message: ChatMessage, html: HTMLElement, data: object): void;
/**
 * This function is used to hook into the Chat Log context menu to add additional options to each message
 * These options make it easy to conveniently apply damage to controlled tokens based on the value of a Roll
 *
 * @param {HTMLElement} html    The Chat Message being rendered
 * @param {object[]} options    The Array of Context Menu options
 *
 * @returns {object[]}          The extended options Array including new context choices
 */
export function addChatMessageContextOptions(html: HTMLElement, options: object[]): object[];
/**
 * Handle rendering of a chat message to the log
 * @param {ChatLog} app     The ChatLog instance
 * @param {jQuery} html     Rendered chat message HTML
 * @param {object} data     Data passed to the render context
 */
export function onRenderChatMessage(app: ChatLog, html: jQuery, data: object): void;
