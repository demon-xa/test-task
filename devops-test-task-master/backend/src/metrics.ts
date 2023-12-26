import promBundle from 'express-prom-bundle';

const metrics = promBundle({ includeMethod: true });

export default metrics;
