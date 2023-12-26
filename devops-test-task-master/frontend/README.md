# CoffeeShop Frontend App ☕️

### What's that?
This is frontend side of CoffeeShop App works on ***node.js***, ***react*** and ***miu***

### Requirements
* **NodeJs** - 16.14.0
* **YARN** - >=1.12.3

### How to run?
* Run `yarn install` - to install packages
* Export envs from `.env.local`
    * On mac OS you can use `export $(cat .env.local)` to export all env variables from the .env.local file.
* Run `yarn dev` - to start dev server

App will be available on `http://localhost:3000`

### Running in production
To run the app in production use:
* `yarn build` - to build app, after successfully built files will be stored in `dist` directory

### Tests
To run test use `yarn test`

### Env vars
Whole app is configuring by this env vars:
* `REACT_APP_API_URL` - host of api server

Obviously `NODE_ENV` to set `development` or `production` env.

### Specific
After performance testing we know that app should have at least `0.5` core of cpu and `1Gb` of memory.
We know that standalone app hold up to `100 RPS`.
#

#### _Have fun and awesome beans every day_ ✌️
