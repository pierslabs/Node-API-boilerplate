# API node boiler plate

- Clone repository.

```
git clone https://github.com/pierslabs/node-api-boilerplate.git
or
git clone git@github.com:pierslabs/node-api-boilerplate.git
cd node-api-boilerplate
```

- Find word boilerplate and and change the name for your app.

- Although the application is already configured, you can do custom configuration in dev.env, dockerfile && docker-compose files.

- Install depenedencies.

```
 npm install
```

### If you want to use docker

- Run Docker

```
docker-compose up --build
```

- The application uses port 8081 by default.
- http://localhost:8081/api/v1/exampleRoute
