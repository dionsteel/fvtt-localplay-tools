declare class SpellConfigurationData {
    static defineSchema(): {
        ability: any;
        preparation: any;
        uses: any;
    };
    /**
     * Changes that this spell configuration indicates should be performed on spells.
     * @type {object}
     */
    get spellChanges(): any;
}
