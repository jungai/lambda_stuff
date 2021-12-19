#!/usr/bin/env bash

set -e
set -o pipefail

rm -rf ../src/app

(cd ../../ && pnpm run --filter app build)

mkdir -p ../src/app
cp ../../../app/package.json ../src/app/package.json
cp -r ../../../app/lib ../src/app/lib
