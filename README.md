# ng2-book-finder
Introduction to Angular2 SPA : Book Finder

This repo provides a very simple implementation of Angular 2.

## Quick Start
For running the app execute the following commands

        npm start

This will open a browser and you will be able to access the demo at http://localhost:3000

## Docker Image support
Follow the below steps to create docker images and run the docker image.

```
docker build -t ng2-book-finder .

docker run -it --rm -p 3000:3000 --name ng2-book-finder ng2-book-finder

```

1. Identify the `IP Address` of `docker-machine`.
2. Open a browser and try to access the following URL http://[docker-machine-ip]:3000

