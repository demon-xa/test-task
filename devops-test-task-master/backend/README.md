# CoffeeShop Backend App ☕️

### What's that?
This is backend side of CoffeeShop App works on ***node.js***, ***express*** and ***postgresql***

### Requirements
* **NodeJs** - 16.14.0
* **YARN** - >=1.12.3
* **PostgreSql** - 14.2

### How to run?
* Run `yarn install` - to install packages
* Run `docker-compose up` - to run postgresql
* Export envs from `.env.local`
  * On mac OS you can use `export $(cat .env.local)` to export all env variables from the .env.local file.
* Run `yarn migrations:dev` for db migrations
* Run `yarn seeds:dev` for seeds
* Run `yarn server:dev` - to start dev server

App will be available on `8080` port

### Endpoints
* `/api/drinks` - will return list of available drinks
* `/api/health` - will return healthcheck status
* `/metrics` - will return prometheus metrics
* `/api-docs` - will return swaggerUI

### Jobs
This app has a job that change balance of supply.
This job should be run frequency at midnight
To run this jobs use:
* `yarn jobs:supply:dev` - while on dev
* `yarn jobs:supply:prod` - while on prod

After successfully running of this job, balance of the drinks should be increased on 50 items

### Running in production
To run the app in production use:
* `yarn build` - to build app, after successfully running files will be stored in `dist` directory
* `yarn migrations:prod` for db migrations
* `yarn server:prod` - will start app in production mode
* `yarn seeds:prod` - will run seeds in production
* `yarn jobs:supply:prod` - will start supply job on production

### Tests
To run test use `yarn test`

### Env vars
Whole app is configuring by this env vars:
* `PORT` - on which port app will be running
* `API_KEY_TOKEN` - secret token
* `DATABASE_URL` - database url in format (`postgres://username:password@host:5432/database_name`)

Obviously `NODE_ENV` to set `development` or `production` env.

### Logs
Logs have a format `time(YYYY-MM-DD HH:mm:ss.SSS) request_id log_level message` - e.g. `2023-12-02 20:49:02.227 2fc23819-a76a-4649-ba35-e34573181e97 debug Received 5 drinks`

### Specific 
After performance testing we know that app should have at least `0.5` core of cpu and `1Gb` of memory.
We know that standalone app hold up to `100 RPS`.
#

#### _Have fun and awesome beans every day_ ✌️
