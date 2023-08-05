/**
 * A standardized helper function for simplifying the constant parts of a multipart roll formula.
 *
 * @param {string} formula                          The original roll formula.
 * @param {object} [options]                        Formatting options.
 * @param {boolean} [options.preserveFlavor=false]  Preserve flavor text in the simplified formula.
 *
 * @returns {string}  The resulting simplified formula.
 */
declare function simplifyRollFormula(formula: string, { preserveFlavor }?: {
    preserveFlavor?: boolean;
}): string;
