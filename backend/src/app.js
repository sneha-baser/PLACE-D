const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 2000;
const userRoutes= require('../routes/user');
app.use(express.json());
const cors = require('cors');
app.use(
    cors({
        origin : 'http://localhost:3000',
        credentials: true
    })
);
//database connection
mongoose.connect('mongodb+srv://sneha:sneha1234@cluster0.lyhnm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify : false ,
    useUnifiedTopology : true
    
}).then(()=>{
    console.log("Database Connected");
}).catch((e)=>{
    console.log(e);
});
app.use('/user',userRoutes);
app.listen(port,()=>{
    console.log("server is running on 2000");
})
