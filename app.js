const express = require("express");
const bodyParser = require("body-parser");
const { delimiter } = require("ejs");

const app = express();


app.set('view engine', 'ejs');

app.get("/", function(req, res){
    let today = new Date();
    let currentDay = today.getDay();
    let day = "";
    if(currentDay == 6 || currentDay == 0){
        day = "Weekend";
    }else {
        day = "Weekday";
    }
    res.render('list', {day: day});
});

const port = 3000;
app.listen(port, function(){
    console.log("Server started on port " + port);
});