let express = require("express");
let figlet = require("figlet");

let app = express();
let port = 3000;

const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/app.js", (req, res) => {
  res.sendFile(path.join(__dirname, "app.js"));
});

app.get("/style.css", (req, res) => {
  res.sendFile(path.join(__dirname, "style.css"));
});


app.listen(port, () => {
  console.log("We are listening at port 3000");
});

app.get("/search", (req, res) => {

    let inpVal = req.query.text || "Default";

    figlet(inpVal, function (err, data) {
        if (err) {
        console.log("Error catched");
        console.dir(err);
        resData = "Error generating text";
        return;
        }
        let code = `Your ans : <pre>${data}</pre>`;
        res.send(code);
    });
});
