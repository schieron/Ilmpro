#!/usr/bin/env bash
echo "replace Stream url"
set -e
declare -A STREAM_DAY_URLS
declare -A STREAM_NIGHT_URLS
declare -A STREAM_URL
declare STREAM_MINP_URL
declare STREAM_MOUT_URL
declare STREAM_MINF_URL
TZ=Europe/Berlin
export TZ


#STREAM_LIVE_URL="https://bit.ly/3D1Pik0"
STREAM_LIVE_URL="http://schieron.ddns.net:8000/ilmpro"
#STREAM_LIVE_URL="https://stream.radioparadise.com/mp3-128"

PLACEHOLDER="--streamurl--"

live=1

if (( $live == 1 )); then
   STREAM_URL=$(sed 's|/|\\/|g' <<< ${STREAM_LIVE_URL})
fi

echo "Stream URL: $STREAM_URL"

for f in $(find . -name "*.json"); do
	sed -i  "s/$PLACEHOLDER/$STREAM_URL/g" "$f"
done
