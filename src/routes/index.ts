import Express from 'express';
import { addBuildingorInterest, getBuildings, getRecommendation } from '../modules';

const router = Express.Router();

// TODO: can add middleware for authorization

router.post('/recommendation', getRecommendation);
router.post('/', addBuildingorInterest);
router.get('/', getBuildings);

export { router };

