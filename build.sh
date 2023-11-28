#! /bin/bash

CUR_DIR="$(dirname "$(realpath "${BASH_SOURCE[0]}")")"

OUTPUT_DIR="${CUR_DIR}/sponsors-output"

rm -rf "${OUTPUT_DIR}"
mkdir -p "${OUTPUT_DIR}"

npx sponsorkit --dir="${OUTPUT_DIR}" -w=800
npx sponsorkit --dir="${OUTPUT_DIR}" -w=1800 --name=sponsors.wide
