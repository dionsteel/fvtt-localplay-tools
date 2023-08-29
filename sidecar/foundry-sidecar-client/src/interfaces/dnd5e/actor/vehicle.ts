import { VehicleAttributes, VehicleCargo } from "./attributes";
import { ActorData } from "./common";

export interface VehicleData extends ActorData {
  vehicleType: string; // Type of vehicle as defined in `DND5E.vehicleTypes`.
  attributes: VehicleAttributes; // Vehicle Attributes
  //Traits
  traits: {
    dimensions: number; //Width and length of vehicle
  };
  cargo: VehicleCargo;
}
