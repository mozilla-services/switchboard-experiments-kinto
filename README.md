# switchboard-experiments-kinto

This project let you manage the configuration files for managing [switchboard-experiments](https://github.com/mozilla-services/switchboard-experiments) data using [Kinto](http://kinto-storage.org/).

All you have to do is to setup the collection on a kinto server by running:

    make migrate

You can then connect to the [kinto-admin](http://kinto.github.io/kinto-admin/) to start edit your switchboard data.

Published JSON data are retrievable using [this url](https://token:switchboard@kinto.dev.mozaws.net/v1/buckets/switchboard/collections/features/records).

## License

Apache-2.0
