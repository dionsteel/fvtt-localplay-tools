import { ItemSystemSource } from "@/interfaces/pf2e/item/data/base";
import { ImageFilePath } from "@/lib/utils";
interface ABCFeatureEntryData {
  uuid: string;
  img: ImageFilePath;
  name: string;
  level: number;
}
interface ABCSystemSource extends ItemSystemSource {
  items: Record<string, ABCFeatureEntryData>;
}
type ABCSystemData = ABCSystemSource;
export type { ABCFeatureEntryData, ABCSystemData, ABCSystemSource };
