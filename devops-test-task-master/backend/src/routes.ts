import { Router } from 'express';

import listDrinks from '@components/drink/drink.controller';
import healthcheck from '@components/healthcheck/healthCheck.controller';

const router: Router = Router();
router.use(Router().get('/health', healthcheck));
router.use(Router().get('/drinks', listDrinks));

export default router;
