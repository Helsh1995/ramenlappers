#!/bin/bash

set -x

clear

. ./deploy_dirs.sh

cd $ROOT
git fetch origin master
git reset --hard FETCH_HEAD

mkdir $SERVER/src/config

cp mail.config.ts $SERVER/src/config/

cd $APP

npm i
npm run build

cd $SERVER
npm i
npm run tsc

pm2 stop server
pm2 start dist/server.js
