const express = require('express')
const app  = express()
const registerRoute=require('./routes/RegisterRoute')
const cors=require('cors')
const mongoose = require('mongoose')
require('dotenv').config
app.use(express.json())
app.use(cors())


const url = `mongodb+srv://TejalR:Tejal2806@cluster0.s9wpjms.mongodb.net/PlacementSystem?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
.then(()=>
{
    console.log("connection success");
})
.catch((err)=>
    {
        console.error(
            {
                message:"connection failed" +err.message
            }
        );
    }
)

app.use('/',registerRoute)

app.listen(process.env.PORT || 8080,(req,res)=>{
    console.log('server running on port 8080')
})