from __future__ import print_function
import hashlib
import json
import logging
import uuid

from kinto_client import cli_utils

logger = logging.getLogger(__file__)

NEW_VERSION = 0

with open('config.json') as f:
    SCHEMA_V1 = json.load(f)['collections']

with open('fixtures.json') as f:
    RECORDS = json.load(f)


def build_key(key):
    return str(uuid.UUID(hashlib.md5(key).hexdigest()))


def migrate_000_001(client, args):
    client.create_bucket(if_not_exists=True)
    client.create_collection(data=SCHEMA_V1['features']['config'],
                             permissions={"read": ["system.Everyone"]},
                             safe=False)

    with client.batch() as b:
        for key, value in RECORDS.items():
            value['name'] = key
            value['buckets']['min'] = str(value['buckets']['min'])
            value['buckets']['max'] = str(value['buckets']['max'])
            b.create_record(id=build_key(key),
                            data=value, safe=False)

# ------


def get_current_version(client):
    try:
        bucket = client.get_bucket()
        return int(bucket['data']['version'])
    except:
        return NEW_VERSION


def set_current_version(client, version):
    client.patch_bucket(data={'version': version})


def main(args=None):
    parser = cli_utils.add_parser_options(
        description="Bootstrap switchboard bucket and collection",
        default_bucket="switchboard",
        default_collection="features")

    args = parser.parse_args(args)
    cli_utils.setup_logger(logger, args)
    client = cli_utils.create_client_from_args(args)
    current_version = get_current_version(client)
    current_version_str = str(current_version).zfill(3)

    next_migration = ('migrate_%s_%s' % (
        current_version_str,
        str(current_version + 1).zfill(3)))

    migrations = sorted([d for d in globals().keys()
                         if d.startswith('migrate_')])

    try:
        start_from = migrations.index(next_migration)
    except ValueError:
        logger.info("Nothing to migrate from version %s" % current_version_str)
    else:
        for migrate in migrations[start_from:]:
            logger.info("Execute %s" % migrate)
            globals()[migrate](client, args)
            set_current_version(client, migrate.split('_')[-1])

if __name__ == '__main__':
    main()
