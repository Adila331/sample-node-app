const express = require("express");
const app = express();
app.get("/",function(req,res){
  res.json("Success");
});
app.listen(process.env.PORT || 8080);
