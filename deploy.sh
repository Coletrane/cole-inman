#!/bin/sh

gcloud config set project coleinman
gsutil -m rsync -r -d -c ./out gs://coleinman.com
