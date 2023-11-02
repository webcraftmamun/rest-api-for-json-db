## Rest Api with express server

This is our first api for react js

## First clone this repo and then inastall its packages

```console
$npm install
```

## Server structure

```js
/server.js // main file of the project

import express from "express";
import colors from "colors";
import dotenv from "dotenv";


// environment variable
dotenv.config();
const PORT = process.env.PORT || 5000;


// express init
const app = express();


// Express middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}))


// listen port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.bgGreen.black);
})
```