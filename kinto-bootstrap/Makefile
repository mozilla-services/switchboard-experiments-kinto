VIRTUALENV = virtualenv
VENV := $(shell echo $${VIRTUAL_ENV-.venv})
PYTHON = $(VENV)/bin/python

# Default values
SERVER_URL = https://kinto.dev.mozaws.net/v1
AUTH = "token:switchboard"
BUCKET = switchboard
COLLECTION = features

FIXTURES = "https://raw.githubusercontent.com/mozilla-services/switchboard-experiments/master/experiments.json"

update-fixtures:
	wget -o fixtures.json $(FIXTURES)

virtualenv: $(PYTHON)
$(PYTHON):
	$(VIRTUALENV) $(VENV)
	$(VENV)/bin/pip install -U kinto-client


migrate: virtualenv
	$(PYTHON) bootstrap.py --server $(SERVER_URL) --auth $(AUTH) --bucket $(BUCKET) --collection $(COLLECTION) -v

clean:
	rm -fr .venv
	find . -name '*.pyc' -delete
	find . -name '__pycache__' | xargs rm -fr

