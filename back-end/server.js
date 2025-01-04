const express=require('express')
const connectDB=require('./config/DBConn');
const foodRoute=require('./routes/foodRoute')
const corsOptions=require('./config/corsOptions')
const cors=require("cors");
const foodRouter = require('./routes/foodRoute');

//app config
const app=express()
require('dotenv').config();
app.use(cors(corsOptions))

const port=4000

//middlewares
app.use(express.json())

//connect to Database
connectDB()


//Routes
app.use('/api/food',foodRoute)
app.use("/images",express.static("uploads"))
app.use('/api/user',require('./routes/userRoute'))
app.use('/api/cart',require('./routes/cartRoute'))
app.use("/api/order",require("./routes/orderRoute"))

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`)
})