#!/bin/bash 

export $(grep -v '^#' .env.production | xargs)

echo $env

npm run start