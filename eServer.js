var app=(require("express")());
var router=require("./eRouter");
app.use("/",router)

app.listen(8080);
