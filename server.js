const express = require("express");
const app = express();
app.get("/",function(req,res){
  res.json("Success my github repo");
});
app.listen(process.env.PORT || 8080);
