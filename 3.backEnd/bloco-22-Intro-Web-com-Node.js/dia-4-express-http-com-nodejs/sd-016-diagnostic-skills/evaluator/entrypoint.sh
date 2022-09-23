#!/bin/sh -l
set -xs

npm install

npm test -- --json --forceExit --outputFile=evaluation.json
node evaluator/evaluator.js evaluation.json .trybe/requirements.json result.json

if [ $? != 0 ]; then
  echo "Execution error"
  exit 1
fi

echo ::set-output name=result::`cat result.json | base64 -w 0`

chmod u+x evaluator/store.sh

evaluator/store.sh `cat result.json | base64 -w 0`
