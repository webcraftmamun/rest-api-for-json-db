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