console.clear();
const express =require('express');
const app = express();
// middleware
app.use(express.json())
//DataBase Connection 
const connection = require('./connection/connection');
connection()


require('dotenv').config()
const Port = process.env.PORT
//Routing
const MovieRouter = require('./Routes/movies')

app.use('/movies',MovieRouter)




app.listen(Port,(err)=>{err ? console.log(err):console.log("server is runing ")})