@echo off
cls
set NODE_ENV=production
yarn && yarn generate && yarn build