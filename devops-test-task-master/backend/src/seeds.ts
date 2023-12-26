// Don't add seeds here, it's just for run

import logger from '@core/utils/logger';
import seedsDrink from '@db/seeds/seeds.drink';

const run = async () => {
  await seedsDrink();
};

run()
  .then(() => {
    logger.info('Seeding done');
    // eslint-disable-next-line no-process-exit
    process.exit(0);
  })
  .catch((e) => {
    logger.error(`Got error while seeding ${e}`);
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  });
