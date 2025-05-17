const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

const todoRoutes = require('./routes/todoRoutes');
app.use("/api", todoRoutes);

const PORT = 5000;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log("MongoDB connected"))
.catch((err)=> console.log(err));
// GET- Read
// POST- Create
// PUT- Update
// DELETE- Delete

app.get("/",(req, res)=>{
    res.send("Hello world");
});

// app.get("/about",(req, res)=>{
//     res.send("This is a about page.");
// });

// app.get("/something",(req, res)=>{
//     res.send("This is a something page.");
// });

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});