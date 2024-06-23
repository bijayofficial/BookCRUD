import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from './config.js';
import bookRoute from "./routes/bookRoutes.js";
import cors from "cors";
const app = express();

// middleware for parsing request body
app.use(express.json())

// middleware for handeling CORS policy 
 // allow all origins with default  of cors
app.use(cors());
// app.use(cors({  // custom cors to restrich request and origin
//     origin: 'http://localhost:5000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
// }))
app.get('/', (req, res)=>{
    res.send({message: ' hello World!'});
})
app.use('/books', bookRoute);

mongoose.connect(mongoDBURL).then(() => {
    console.log('app connected to database');

    app.listen(PORT, () => {
        console.log(`app is listening to port ${PORT}`)
    })
}).catch((error) => {
    console.log(error); 
});