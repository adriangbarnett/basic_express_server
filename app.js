/*
    npm i
    npm i -g nodemon

    npm run dev
    node app.js

    http://localhost:3000
    http://localhost:3000/suspend
    http://localhost:3000/return

*/

const express=require("express");
app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// suspend
app.get('/suspend', function(req, res, next) {
    return res.send({code: 200, message: "suspend", method: "get", req: req.headers});
});

app.post('/suspend', function(req, res, next) {
    return res.send({code: 200, message: "suspend", method: "post", req: req.headers});
});

// return
app.get('/return', function(req, res, next) {
    return res.send({code: 200, message: "return", method: "get", req: req.headers});
});

app.post('/return', function(req, res, next) {
    return res.send({code: 200, message: "return", method: "post", req: req.headers});
});

// error
app.get("*", (req, res) => {
    return res.send({code: 404, message: "page not found", method: "get", req: req.headers});
});

app.post("*", (req, res) => {
    return res.send({code: 404, message: "page not found", method: "post", req: req.headers});
})

app.listen(3000, function() { 
    console.log("Listening....");
});