#!/usr/bin/env bash
echo "replace Stream url"
set -e
declare -A STREAM_DAY_URLS
declare -A STREAM_NIGHT_URLS
declare STREAM_URL
TZ=Europe/Berlin
export TZ


STREAM_LIVE_URL="https://bit.ly/3vCuXxB"
MENTI_URLS[0]="https://bit.ly/3fpaSpv"
MENTI_URLS[1]="https://bit.ly/3fpaSpv"
MENTI_URLS[2]="https://bit.ly/3fpaSpv"

PLACEHOLDER="--streamurl--"


live=1

if (( $live == 1 )); then
   STREAM_URL=$(sed 's|/|\\/|g' <<< ${STREAM_LIVE_URL})
fi

echo "Stream URL: $STREAM_URL"


sed -i  "s/$PLACEHOLDER/$STREAM_URL/g" ./*.json