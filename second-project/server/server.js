const express = require("express");
const cors = require("cors");
const app = express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const helmet=require("helmet");
const morgan=require("morgan");
const { error } = require("console");
const userRoute=require("./Routes/Users")
const authRoute=require("./Routes/Auth");
const postRoute=require("./Routes/Posts")

dotenv.config();


//middleware
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.use("/api/users" , userRoute);
app.use("/api/auther" , authRoute);
app.use("/api/posts" , postRoute)

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});

mongoose.
connect('mongodb+srv://Admin:1U17Jgv31Gy5QTNv@cluster0.3dq6wbz.mongodb.net/server?retryWrites=true&w=majority')
.then(() =>{
  console.log('connected to MongoDb');
}).catch((error) =>{
  console.log(error);
})