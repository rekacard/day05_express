
const express = require("express");

const app = express();

// app.get('/', 
//     // res.send("GET request to homepage");
//     express.static(__dirname)
// )

app.use(express.static(__dirname));
app.use("/images", express.static(__dirname + "/img"));

var port = (process.argv[2])? +process.argv[2] : 3000;
if ((port <= 0) || (port == NaN))
    port = 3000;

app.listen(port, function(){
    console.log("Port %d", port)}
);