const express =require("express");
const app=express();
app.get("/",(req, res) => {
    res.send("hello");
});
app.get("/about",(req, res) => {
    res.sendFile(__dirname+"/index.html");
});
app.get("/contact",(req, res) => {
    res.json([
            {
                id:1,
                name:"anupam",
                post:"devoloper"
            },
            {
                id:1,
                name:"sayan",
                post:"tester"
            }
            ]);
});
app.listen(3000,()=>{console.log("running server on 3000 port")});