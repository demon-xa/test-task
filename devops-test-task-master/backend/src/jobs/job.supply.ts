import logger from '@core/utils/logger';
import { update } from '@persistence/drink.persistence';

const supply = async () => {
  logger.info('Receiving another 50 items');
  await update(1, 'Espresso', 150);
  await update(2, 'Americano', 250);
  await update(3, 'Latte', 350);
  await update(4, 'Soda', 450);
  await update(5, 'Still Water', 550);
  logger.info('Received another 50 items');
  // eslint-disable-next-line no-process-exit
  process.exit(0);
};

export default supply();
