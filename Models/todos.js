const mongoose = require('mongoose');

const todosSchema = new mongoose.Schema({

    content:{
        type: String,
        required: true

    },
    date :{
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('Todos', todosSchema );