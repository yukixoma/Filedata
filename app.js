var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");

var multer = require("multer");
var upload = multer({dest: "upload/"})

var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + "/public"));
app.listen(process.env.PORT || 3000,function(err){
    if(err) throw err;
    console.log("Listening");
})

// Multer will not process any form which is not multipart (multipart/form-data)
// So must declare form's attribute enctype="multipart/form-data" 
app.post("/upload",upload.single("file"),function(req,res){
    console.log("upload working");
    res.json({
        size :req.file.size
    });
})