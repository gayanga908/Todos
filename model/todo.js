import mongoose from 'mongoose';
const { Schema } = mongoose;

const TodoModel = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    active : {
        type : Boolean,
        required : true
    },
    endDate : {
        type : Date,
        required : false,
        default: Date.now 
    },
});

const Todo = mongoose.model('todos', TodoModel);

export default Todo;