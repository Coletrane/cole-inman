#!/bin/sh

gcloud config set project coleinman
gsutil -m rsync -r out gs://coleinman.com
