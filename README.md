## Prerequisite
- docker-compose
- k6

```sh
$ brew install k6
```

## Run

- Create mock test url https://designer.mocky.io/
- Update url in `./test-url.js`


Run simple test

```sh
$ k6 run 1-sample.js
```

With Grafana dashboard

```sh
$ docker-compose up -d 
```
```sh
$ k6 run -e TEST_TAG=test-1 --out influxdb=http://localhost:8086/k6  7-visualize-with-grafana.js
```

Then navigate to http://localhost:3000/dashboards
