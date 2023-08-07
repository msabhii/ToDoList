import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
let newitems = [];
let newWorks = [];

app.get("/", (req, res) => {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let today = new Date();
  let day = today.toLocaleDateString("en-US", options);

  res.render("index.ejs", { Todaydate: day, newitemlist: newitems });
});

app.post("/", (req, res) => {
  let newitem = req.body.newitems;
  newitems.push(newitem);
  res.redirect("/");
});

app.get("/work", (req, res) => {
  res.render("work.ejs", { worklist: newWorks });
});

app.post("/work", (req, res) => {
  let newWork = req.body.newWorks;
  newWorks.push(newWork);
  res.redirect("work");
});

app.listen(port, () => {
  console.log("The Server is Working on Port " + port);
});
