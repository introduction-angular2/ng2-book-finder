# ng2-book-finder

## Table of contents 
1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Dependencies](#dependencies)
4. [Features Supported](#features-supported)
5. [Quick Start](#quick-start)
6. [Change History](./CHANGELOG.md)
7. [Resources](#resources)

## Introduction 
A very simple implementation of Book Search SPA using Angular 2. This SPA provides a search box to find ebooks by consuming REST end Point using Angular2 HTTP API and RXJS. REST API end-point is provided by [IT-eBooks-API](http://it-ebooks-api.info/)

##Prerequisites

- Makesure you have [Node.js v4.3.2 and NPM](https://nodejs.org/dist/v4.3.2/)  installed and configured.
- Optional - Make sure you have docker setup on your local machine to run the application SPA as docker container.   Refer [installation on windows](https://docs.docker.com/engine/installation/windows/) and  [installation on Mac OS X](https://docs.docker.com/engine/installation/mac/) 

## Dependencies
RA locale blocks have dependencies on:

1. [angular2 2.0.0-beta.0](https://angular.io/)
2. [bootstrap ~3.2.0](http://getbootstrap.com/)
3. [rxjs 5.0.0-beta.0](https://github.com/Reactive-Extensions/RxJS)
4. [typescript ^1.7.3](http://www.typescriptlang.org/)
5. Browser IE 9 and above

## Features Supported
TBD

## Quick Start
1. Clone repository and checkout master branch
    
      ```bash
      git clone https://github.com/introduction-angular2/ng2-book-finder.git
      cd ng2-book-finder
	  git checkout master	
      ```

2.  Install NPM dependencies
       
	```bash 
       npm install
	```
      
### Local Machine 

1. For running the app on your local machine execute the following commands

        npm start
        

1. This will open a browser and you will be able to access the demo at [http://localhost:3000](http://localhost:3000)

### Docker Machine
For running the app on your docker machine as docker container, follow the below steps 


1. Run the docker client and docker machine by launching "Docker Quickstart Terminal".

2. Note down the docker machine ip address.
 	  ```bash
      docker-machine ip default
      ```

3. Create docker image by running the command from project root on docker client
    
      ```bash
      docker build -t ng2-book-finder .
      ```
4. Run the docker image.

	 ```bash
      docker run -it --rm -p 3000:3000 --name ng2-book-finder ng2-book-finder
     ```

5. Open a browser and access the application on URL http://[docker-machine-ip]:3000


##Resources

1. For Angular2 please visit [https://angular.io/](https://angular.io/)
2. For Typescript please visit [http://www.typescriptlang.org/](http://www.typescriptlang.org/)
2. For Reactive Javascript please visit [RxJS](https://github.com/Reactive-Extensions/RxJS)
1. For all docker installation guide and commands please visit [docker documentation](#https://docs.docker.com/engine/)

