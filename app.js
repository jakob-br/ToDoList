const express = require("express");
const bodyParser = require("body-parser");
const { delimiter } = require("ejs");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    }
    let day = today.toLocaleDateString("en-US", options);

    res.render('list', {
        day: day, //day -> day | Current Day = Weekend/Weekday
    });
});

app.post("/", function(req, res){
    let Task = req.body.newTask;
    console.log(Task);
})

const port = 3000;
app.listen(port, function(){
    console.log("Server started on port " + port);
});