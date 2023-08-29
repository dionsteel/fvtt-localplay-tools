import { EquipmentSystemData, EquipmentSystemSource } from "@/interfaces/pf2e/item/equipment";
import { BasePhysicalItemSource } from "@/interfaces/pf2e/item/physical";
import { ItemUUID } from "@/lib/utils";
type BookSource = BasePhysicalItemSource<"book", BookSystemSource>;
type BookSystemSource = EquipmentSystemSource & {
  capacity: number;
} & (FormulaBookData | SpellBookData);
type BookSystemData = Omit<BookSystemSource, "hp" | "price"> & EquipmentSystemData;
interface FormulaBookData {
  subtype: "formula";
  item: ItemUUID[];
}
interface SpellBookData {
  subtype: "spell";
  item: object[];
}
export type { BookSource, BookSystemData };
