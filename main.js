let express = require("express");
const res = require("express/lib/response");
let PORT = 8000;


let app = express();

/**
 * this endpoint reads the query params "name", and responds back with
 * "Hello ${name}, how are you?"
 * if no name is avaiable on the query param, then respond back with
 *  Hello {name}, how are you?
 */


app.get("/hi",function(req, res){
    //serve execute this logic
    console.log("GET /hi");
    
    let blob = {};
    blob.message = "Hi";
    blob.time = new Date();

    res.json(blob);


});

app.get("/hello", function(req, res){
    console.log("GET /hello");
//pull the name from request & save the variable
let q = req.query;
//store param
let name = q.name;
//variable for greeting
let greeting;
//if the query params contains the name. IF statement for name. What do you want to happen?
if (name){
    greeting = `Hello ${name}, how are you doing?`;
}else {
    greeting = "Hello Bob, how are you doing?"

};
res.send(greeting);


    // let string = "<html><body>Hello Bob, how are you?</body></html";

    // res.send(string);
})
app.get("/sup", function(req,res){
    console.log("GET /sup");
    res.sendStatus(204);
})

app.get("/hey", function(req,res){
console.log("GET /hey");
    res.status(400).send("hey is for horses");
});
//This endpoint responds back with the query params
app.get("/echo", function(req, res){
    console.log("GET /echo");
    console.log("query params= ", req.query);
    res.json(req.query);
})


app.listen(PORT, function(){
    console.log("Application started listening on port", PORT);
})