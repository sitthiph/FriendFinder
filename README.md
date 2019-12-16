![Friend Finder](https://i.ibb.co/TgRr4WQ/Untitled.png)
# Friend Finder

Deployed [here](https://hes-friendfinder.herokuapp.com/)

## Overview
Friend Finder implements friend matching based on the user's responses to a ten question survey. The user responds to questions with values from 1 (Strongly Disagree) to 5 (Strongly Agree). When the survey is submitted, an existing user record closest to the current user's responses is found and returned. The closest set of user responses is defined as the set with the lowest absolute difference for all ten questions combined.
<br><br>
Friend Finder application is meant to simulate a simple dating app. The application is implemented using a [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/) server on the back end and the [Bootstrap](https://getbootstrap.com//) CSS framework on the front end.

### Motivation

The goal of this application is to learn and use GraphQL instead of RESTful.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Demo

Friend Finder is deployed on Heroku. Please check it out [here](https://hes-friendfinder.herokuapp.com/).

### Installing

To install the application follow the instructions below:

```
git clone git@github.com:sitthiph/FriendFinder.git
cd FriendFinder
npm install
node server.js
```

## Built With

* [NodeJS](https://nodejs.org/en/)
* [ExpressJS](https://expressjs.com/)
* [Bootstrap](https://getbootstrap.com//)
