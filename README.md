# This is Us api

The purpose of this code base was to learn how to create an API using Node.JS.

Because I think This is Us is great, I created an API that:

1. Allows you to GET all the names, gender and sadness_points for each of the Triplets
2. Allows you to PATCH each of the sadness_points (if you do not agree with me)
3. Create users (to get access to tokens) that can actually PATCH the stored information

#TUTORIAL FOLLOWED
Most of the code base came from the project below.

Do refer to it if you want to learn more.

# REST API Tutorial

This sample is published as part of [the corresponding article](https://www.toptal.com/nodejs/secure-rest-api-in-nodejs) at the Toptal Engineering Blog. Visit https://www.toptal.com/developers/blog and subscribe to our newsletter to read great posts!

## Before using

- Please make sure that you have:
 - Node.js installed (https://nodejs.org/)
 - MongoDB installed and running locally (https://www.mongodb.com/)
   - Using Windows, just open the terminal at where you installed mongo and run `mongod.exe`
 - Run `npm install` or `yarn` in your root project folder

## Usage

To run the project, please use a command line the following:
 - `npm start`
    - It will run the server at port 3600.


### 2019-09-13 update

- Refactored mongoose to a proper common service.
- Added a Dockerfile and docker-compose configuration.

If you are familiar to docker and you have docker installed on your machine and just want to run the project without issues please do:

 - docker-compose build
 - docker-compose up
 - It will run the mongodb at port 27017 (for testing purposes only).
 - It will run the server at port 3600.

### 2020-02-01

I've created a 2020 version of this project using Typescript. If you might be interested on it, please check the following repository: https://github.com/makinhs/expressjs-api-tutorial

### 2020-09-09

- Updated and pruned dependencies.
- Fixed deprecation warnings.
- Leveraged `findOneAndUpdate` to simplify PATCH code.
- Changed default MongoDB server name to `localhost` to simplify first-time setup.
- Checked that it works with the latest version of Node.js, 14.9.0.
