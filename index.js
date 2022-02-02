const express = require("express");

const mongoose = require('mongoose');
const TodosModel = require('./Models/todos'); 
const TodosRoutes = require('./Routes/todos');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

//liste des tâches

// app.get("/", (req,res) =>{
// res.send("home");
// })

//connexion à la base de données

app.use('/todos', TodosRoutes);


mongoose.connect('mongodb://127.0.0.1:27017/MeanStackCourse' , {useNewUrlParser: true});

const db = mongoose.connection;

db.once('open', ()=>{
    console.log("Database connected");
})

db.on('error', err=>{
    console.log('connection error', err)
})

app.listen(3000, ()=>{
    console.log("serveur démarré")
})