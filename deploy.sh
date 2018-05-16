#!/bin/bash

clear

. ./deploy_dirs.sh

cd $ROOT
git fetch origin master
git reset --hard FETCH_HEAD

cd $APP

npm i
npm run build

cd $ROOT
rm -rf $FRONT/*
cp -rf $APP/dist/* $FRONT
cp .htaccess $FRONT




cd $SERVER
npm i
npm run start

