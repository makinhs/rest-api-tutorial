# REST API Tutorial

This sample is published as part of the blog article at www.toptal.com/blog:

- https://www.toptal.com/nodejs/secure-rest-api-in-nodejs

Visit www.toptal.com/blog and subscribe to our newsletter to read great posts

## Before using

- Please make sure that you have:
 - node.js installed (https://nodejs.org/)
 - have mongodb installed and running locally (https://www.mongodb.com/)
   - Using Windows, just open the terminal at where you installed mongo and run `mongod.exe`
 - run npm install in your root project folder
## Usage

To run the project, please use a command line the following:
 - npm start
    - It will run the server at port 3600.


### 2019-09-13 update

- Refactored mongoose to a proper common service.
- Added a Dockerfile and docker-compose configuration.

If you are familiar to docker and you have docker installed on your machine and just want to run the project without issues please do:

 - docker-compose build
 - docker-compose up
 - It will run the mongodb at port 27017 (for testing purposes only).
 - It will run the server at port 3600.
