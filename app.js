const express = require('express');
const bodyParser = require('body-parser');
const ejs  = require('ejs');

const app = express();
const port = process.env.PORT || 2000;

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req,res){
  res.render("home");
});

app.get("/contact", function(req,res){
  res.render("contact");
});

app.listen(port, function(){
  console.log("Server started at port ${port}");
});
