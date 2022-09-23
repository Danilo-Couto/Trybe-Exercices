#!/bin/bash
set -xe

red='\033[0;31m'
green='\033[32m'
blue='\033[36m'
reset='\033[0m'

PAYLOAD=$(echo $1 \
  | base64 -d \
  | jq -c --arg number $PR_NUMBER '. + {pr_number: $number}'
)

ENDPOINT="https://diagnostic-api.herokuapp.com/deliveries"


echo -e "${blue}[INFO] Sending evaluation information using →${reset} '$ENVIRONMENT'"

status_code=$(
  curl \
  -X POST \
  -H "Content-Type: application/json" \
  -d "$PAYLOAD" \
  --write-out %{response_code} \
  --silent \
  --output response_output.txt \
  $ENDPOINT
)

echo -e "${blue}[INFO] Status Code →${reset} '$status_code'"
if [[ "$status_code" == 201 ]]; then
  echo -e "${green}[INFO] Delivery created successfully ✓"
else
  echo -e "${red}[ERROR] Execution error"
  echo -e "${red}[ERROR] Response ↓${reset}" | cat - response_output.txt
  exit 1
fi
