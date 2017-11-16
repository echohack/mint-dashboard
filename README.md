# mint-dashboard

Written using Vuejs and Express.

Production artifacts are built using [Habitat](https://habitat.sh).

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build assets with minification
npm run build

# build assets and view the bundle analyzer report
npm run build --report

# build production server with minification
hab studio enter
build

# install the .hart file on your production server, or export a docker container
hab pkg export docker ./results/origin-mint-dashboard-0.1.0-20171116042215-x86_64-linux.hart

# run the production docker container
docker-compose up

# configure the application at runtime
hab config apply --peer 172.17.0.3 myapp.prod 1 /tmp/newconfig.toml 
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
