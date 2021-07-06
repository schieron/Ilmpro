#!/usr/bin/env bash
echo "replace Stream url"
set -e
declare -A STREAM_DAY_URLS
declare -A STREAM_NIGHT_URLS
declare STREAM_URL
declare STREAM_MINP_URL
declare STREAM_MOUT_URL
declare STREAM_MINF_URL
TZ=Europe/Berlin
export TZ


STREAM_LIVE_URL="https://bit.ly/3vCuXxB"
MENTI_URLS[0]="https://www.menti.com/owsgv87ttx"
MENTI_URLS[1]="https://www.mentimeter.com/s/01819a82428553c5802b34bcde96f0cf/b6d03333eec0"
MENTI_URLS[2]="https://bit.ly/3fpaSpv"
MENTI_URLS[3]="https://www.mentimeter.com/s/dfffa38a6e20428d7b16755de35230b0/4b57bc10be01"

PLACEHOLDER="--streamurl--"
PLACEHOLDER1="--streaminpurl--"
PLACEHOLDER2="--streamouturl--"
PLACEHOLDER3="--streaminfurl--"

live=1

if (( $live == 1 )); then
   STREAM_URL=$(sed 's|/|\\/|g' <<< ${STREAM_LIVE_URL})
fi

echo "Stream URL: $STREAM_URL"

STREAM_MINP_URL=$(sed 's|/|\\/|g' <<< ${MENTI_URLS[0]})
STREAM_MOUT_URL=$(sed 's|/|\\/|g' <<< ${MENTI_URLS[1]})
STREAM_MINF_URL=$(sed 's|/|\\/|g' <<< ${MENTI_URLS[2]})

for f in $(find . -name "*.json"); do
sed -i  "s/$PLACEHOLDER/$STREAM_URL/g" "$f"
sed -i  "s/$PLACEHOLDER1/$STREAM_MINP_URL/g" "$f"
sed -i  "s/$PLACEHOLDER2/$STREAM_MOUT_URL/g" "$f"
sed -i  "s/$PLACEHOLDER3/$STREAM_MINF_URL/g" "$f"
done
