import mongoose from 'mongoose';
const { Schema } = mongoose;

const testModel = mongoose.Schema({
    title : String,
    body : String
});

const test = mongoose.model('todoss', testModel);

export default test;