# switchboard-experiments-kinto

This is an experimental admin console for managing [switchboard-experiments](https://github.com/mozilla-services/switchboard-experiments) data using [Kinto](http://kinto-storage.org/).

## Demo

![](http://i.imgur.com/ZL0joMm.png)

A live demo is hosted [on gh-pages](https://mozilla-services.github.io/switchboard-experiments-kinto).

Settings should be configured as following:

![](http://i.imgur.com/4jQGs4F.png)

Published JSON data are retrievable using [this url](https://public:notsecret@kinto.dev.mozaws.net/v1/buckets/default/collections/experiments/records).

## Install

```
$ git clone XXX
$ npm install
```

# Run localy

```
$ npm start
```

Then head to [localhost:3000](http://localhost:3000/).

## License

Apache-2.0
