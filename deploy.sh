#!/bin/sh

aws s3 sync --profile eloc49 --acl public-read ./out s3://aws-website-coleinman-1koh9 --exclude '*.DS_Store';
aws cloudfront --profile eloc49 create-invalidation --distribution-id E1DAH8QFPO2SLD --paths '/*';