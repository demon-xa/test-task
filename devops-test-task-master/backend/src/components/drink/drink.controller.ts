import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { selectAll } from '@persistence/drink.persistence';
import logger from '@core/utils/logger';

const listDrinks = async (req: Request, res: Response) => {
  const drinks = await selectAll();
  logger.debug(`Received ${drinks.length} drinks`);

  res.status(httpStatus.OK);
  res.send({ data: drinks });
};

export default listDrinks;
