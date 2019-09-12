const express = require('express')
const app = express()
const port = 5000
const axios = require('axios')
const cors = require('cors')
require('dotenv').config()

app.use(cors());

app.get('/client/authenticate', (req, res) => {
    axios({
        url: "https://accounts.spotify.com/api/token",
        method: "post",
        params: {
            grant_type: "client_credentials"
        },
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        auth: {
            username: process.env.CLIENT_ID,
            password: process.env.CLIENT_SECRET
        }
    })
    .then((response) => {
        const data = JSON.stringify(response.data);
        const responseObject = JSON.parse(data);
        res.send(responseObject);
    })
    .catch((error) => {
        console.log(error);
        res.send("Error authenticating");
    });
});

app.listen(port, () => console.log(`App listening on port ${port}!`))

