const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001

//This next line of code is for when we deploy for production. Express.js only serves static files.
if (process.env.PORT === "production"){
    app.use(express.static("client/build"));

    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}
app.listen(PORT, () =>{
    console.log(`Backend Server Listening on Port ${PORT}`);
})

