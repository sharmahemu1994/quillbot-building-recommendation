import { Request, Response } from 'express';
import { getRecommendedBuilding } from './recommendation.helper';

export const getRecommendation = (req: Request, res: Response) => {
  // TODO: can use JOI for user Input validation
  if(!req.body.interests || !Array.isArray(req.body.interests)) {
    res.status(400).send({message: "interest shoud be array"})
  }
  const recommendedBuilding  = getRecommendedBuilding(req.body.interests)
  res.status(200).send({recommendedBuilding})
}