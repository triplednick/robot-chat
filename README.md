# Project Title

This is a React based application that uses the Cleverbot api so that you can have a conversation with a chat bot. The heavy lifting of the app is done with Axios API calls.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites
The following commands are to be ran from the projects root directory. One of the npm scripts for the development flow relies on nodemon to be installed globally. If you do not have this installed globally, read about it here:
https://github.com/remy/nodemon

or install is with this command:
```
npm install -g nodemon
```

### Installing

Clone project and run:
```
npm install
```

## How to run development flow

To start the webpack-dev-server:
```
npm start
```

To run the api express server that is used so that our webpack-dev-server can proxy api calls through it:
```
npm run apiServer
```
## Running the tests

Stay tuned....

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Axios](https://github.com/mzabriskie/axios) - Used for API calls
* [Cleverbot](https://www.cleverbot.com/api/) - Used to generate AI statements to facilitate a real conversation.
* [Redux](http://redux.js.org/) - Used to handle the applications state.

## Authors

Nick Stradford - nickstrad.com
