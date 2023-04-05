import { BuildingsProvided as buildings } from "../../store/db";
import { IBuildingInput, INewBuilding } from "./building.type";

export const addbuildingOrInterest = (input: IBuildingInput) => {
  for (const building of buildings) {
    if(Object.keys(building)[0] == input.building){
      building[Object.keys(building)[0]].push(...input.interests)
      return buildings;
    }
  }
  const newbuilding: INewBuilding = {};
  newbuilding[input.building] = input.interests;
  buildings.push(newbuilding);
  return buildings
}