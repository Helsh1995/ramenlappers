#!/bin/bash

clear

source ./deploy_dirs.sh

cd $ROOT
#git pull

cd $APP

npm i
npm run build

cd $ROOT
cp .htaccess $APP/dist
#rm -rf $FRONT/*
#cp -rf $APP/dist/* $FRONT



cd $SERVER
npm i
npm run start

