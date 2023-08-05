export interface PhysicalItem5e {
  quantity: number; //  Number of items in a stack.
  weight: number; //  Item's weight in pounds or kilograms (depending on system setting).
  price: ItemPrice5e; // Item's price
  rarity: string; //  Item rarity as defined in `DND5E.itemRarity`.
  identified: boolean; //  Has this item been identified?
}

export interface ItemPrice5e {
  value: number; //  Item's cost in the specified denomination.
  denomination: string; //  Currency denomination used to determine price.
}
