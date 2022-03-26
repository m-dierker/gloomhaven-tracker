#!/usr/bin/env bash

# From root directory: ./scripts/set_storage_cors.sh
# One-off script to allow web clients to pull in files.

gsutil cors set scripts/storage/cors.json gs://glo2mhaven-tracker.appspot.com