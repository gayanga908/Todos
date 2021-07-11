import Express  from "express";
import router from "./routes/routes.js";
import todoRouter from "./routes/todo-routes.js";
import mongoose from 'mongoose';

const uri = "mongodb+srv://todoUser908:FzGCvYLPljanGBgz@cluster0.5f5yi.mongodb.net/todoApp?retryWrites=true&w=majority";

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected mongoose");
});

const app = Express();
app.use(Express.json())
app.use(router);
app.use('/todo', todoRouter);

app.listen(3000, () => console.log("listning to port 3000"));