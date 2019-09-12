This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Jackify - Coding Test

### Dependencies used:

##### - axios
##### - cors 
##### - nodemon
##### - dotenv

## Running the Project

The server must be running to use the React website.

The .env file contains the Spotify access keys, I did remove this with gitignore but you guys are going to need them.

### Install dependencies:

```
npm install

```

### To start the react website use the command:

```
npm start

```


### To start the express server run the command in a new terminal:

```
npm run start-server

```

#### This server reloads with nodemon when there are changes

#### There is only one API - 'authenticate' which takes the Spotifiy client id and secret from the .env file to return an access token using the Spotify API.
