#!/bin/sh
set +e
tsc
tslint -p . -c tslint.json # 'src/**/*.ts'
tsc
