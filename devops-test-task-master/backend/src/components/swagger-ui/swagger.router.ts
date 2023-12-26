import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';

import constants from '@config/constants';
import config from '@config/config';
import {
  swaggerForbidden,
  swaggerBasePath,
} from '@core/middlewares/swagger.middleware';

const router: Router = Router();

if (config.env !== 'production') {
  router.use(constants.API_DOCS_PATH, swaggerUi.serve, swaggerBasePath);
} else {
  router.use(constants.API_DOCS_PATH, swaggerForbidden);
}

export default router;
