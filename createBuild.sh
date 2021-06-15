#!/bin/bash

echo "Subindo o container..."
docker-compose up -d --remove-orphans

sleep 5

echo "Definindo permissoes das pastas de volumes..."
docker container exec electron-mostusedwords bash -c "chmod 777 -R /usr/src/app"
sleep 1

echo "Iniciando o app..."
# criando a build
docker container exec electron-mostusedwords bash -c "cd /usr/src/app; npm i; npm run electron:build"
sleep 1

echo "Definindo permissoes das pastas de volumes..."
docker container exec electron-mostusedwords bash -c "chmod 777 -R /usr/src/app"
sleep 1

echo "Parando o container"
docker-compose down