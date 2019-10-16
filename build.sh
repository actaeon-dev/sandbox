#!/bin/sh
set -e
util/.venv/bin/python3 util/compile_data.py
tsc
tslint -p . -c tslint.json
set +e
