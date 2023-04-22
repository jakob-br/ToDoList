const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');

let items = [];
let workItems = [];
app.get("/", function(req, res){
    let day = date.getDay();
    res.render('list', {
        listTitle: day, //day -> day | Current Day = Weekend/Weekday
        items: items,
    });
});

app.get("/work", function(req, res){
    res.render("list",{
        listTitle: "Work List",
        items: workItems,
    });
});

app.get("/about", function(req, res){
    res.render("about");
});

app.post("/", function(req, res){
    let item = req.body.newTask;
    if(req.body.list === "Work List"){
        workItems.push(item);
        res.redirect("/work");
    }
    else {
        items.push(item);
        res.redirect("/");
    }
});

const port = 3000;
app.listen(port, function(){
    console.log("Server started on port " + port);
});