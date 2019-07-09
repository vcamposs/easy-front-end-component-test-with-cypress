## Subindo o "app" (via Dockerfile):
1. ~/axios-react-docker/app
-- $ npm install

2. ~/axios-react-docker
-- $ docker image build -t container-app
-- $ docker container run -p 3000:3000 container-app

## Subindo o Stubby (via Dockerfile):
1. ~/component-test/mocks/Dockerfile
-- $ docker image build -t container-mock .
-- $ docker container run -p 9009:9009 container-mock

## Subindo usando o docker compose :
1. ~/axios-react-docker
-- docker-compose -f docker-compose.yml up -d --build --force-recreate