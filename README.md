# switchboard-experiments-kinto

This project let you manage the configuration files for managing [switchboard-experiments](https://github.com/mozilla-services/switchboard-experiments) data using [Kinto](http://kinto-storage.org/).


## Setup the collection

Enter the **kinto-bootstrap folder**, then you can setup the
collection on a kinto server by running the following command:

    make migrate \
	    SERVER_URL=https://localhost:8888/v1 \
		AUTH=token:switchboard \
		BUCKET=switchboard \
		COLLECTION=features

- The switchboard data will be editable on to the [kinto-admin](http://kinto.github.io/kinto-admin/).
- Published JSON data will then be available here: https://localhost:8888/v1/buckets/switchboard/collections/features/records


## Test the feature

Enter the **switchboard** folder, then you can start the demo app by running:

    npm install
	npm run start

## Use ABTesting utils in your own project

You can use the [ABTesting.js](http://mozilla-services.github.io/switchboard-experiments-kinto/ABTesting.js) file like that:

    <script src="ABTesting.js"></script>

And then you can use the ABTesting functions:

    ABTesting.isActivatedFeature(
	  {match: {}, buckets: {min: "75", max: "90"}}, {deviceID: "abcdef"}
	);

## License

Apache-2.0
