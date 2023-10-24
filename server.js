
import express from 'express';
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'



//config env

dotenv.config();
//rest Object

const app = express();

//database config
connectDB();



//middle ware -- morgan
app.use(express.json());

app.use(morgan('dev'));


//routes

app.use('/api/v1/auth' ,authRoutes);

//rest api
app.get('/', (req, res) => {
    res.send(
        "<h1> Welcome to Ecommerce App </h1>"
    )

});
//Port
const PORT = process.env.PORT || 8080;

//run 

app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} mode on ${PORT}`.bgCyan.white);
});




