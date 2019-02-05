import express = require("express");
import mainDispatcher from "./dispatcher/main-dispatcher";
import  cors =require("cors");

const app = express();
app.use(cors());
app.use(mainDispatcher);

app.listen(3002 ,()=> console.log("Server is listening at 3001"));

