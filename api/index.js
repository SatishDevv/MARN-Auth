import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_TEST)
.then( () => {
    console.log('connected to the mongoose database server');
} )
.catch( (err) =>{
    console.log(err);

} );


app.listen(3000, () => {
        console.log('server listening on port 3000');
    });


