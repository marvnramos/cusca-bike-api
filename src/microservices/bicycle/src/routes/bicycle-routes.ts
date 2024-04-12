import { Router } from 'express';
import  BicycleController  from '../controllers/bicycle-controller';

const router: Router = Router();

router.post('/', BicycleController.createBicycle);
router.get('/', BicycleController.getBicycles);
router.get('/:id', BicycleController.getBicycle);
router.patch('/:id', BicycleController.updateBicycle);
router.delete('/:id', BicycleController.deleteBicycle);

export default router;
