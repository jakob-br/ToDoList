const express = require("express");
const bodyParser = require("body-parser");
const { delimiter } = require("ejs");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

let items = [];
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
        items: items,
    });
});

app.post("/", function(req, res){
    item = req.body.newTask;
    items.push(item);
    res.redirect("/");
});

const port = 3000;
app.listen(port, function(){
    console.log("Server started on port " + port);
});