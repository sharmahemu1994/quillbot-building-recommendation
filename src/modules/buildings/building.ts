import { Request, Response } from 'express';
import { BuildingsProvided as buildings } from "../../store/db";
import { addbuildingOrInterest } from './building.helper';

export const addBuildingorInterest = (req: Request, res: Response) => {
  // TODO: can use joi for input validations
  // scope of improvement: remove duplicate interests in same building
  if(!req.body.building) res.status(400).send('Building must be there');
  const buildings = addbuildingOrInterest(req.body);
  res.status(200).send(buildings);
}


export const getBuildings = (_: Request, res: Response) => {
  res.status(200).send(buildings);
}
