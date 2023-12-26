import express, { Application } from 'express';

import httpContext from 'express-http-context';
import constants from '@config/constants';
import httpLogger from '@core/utils/httpLogger';
import errorHandling from '@core/middlewares/errorHandling.middleware';
import uniqueReqId from '@core/middlewares/uniqueReqId.middleware';
import http404 from '@components/404/404.router';
import swaggerApiDocs from '@components/swagger-ui/swagger.router';
import cors from 'cors';
import routes from './routes';
import metrics from './metrics';

const app: Application = express();

app.use(metrics);
app.use(cors());
app.use(httpContext.middleware);
app.use(httpLogger.successHandler);
app.use(httpLogger.errorHandler);
app.use(uniqueReqId);
app.use(express.json());
app.use(constants.API_ROOT_PATH, routes);
app.use(swaggerApiDocs);
app.use(http404);

app.use(errorHandling);

export default app;
