var app=(require("express")());
var router=require("./eRouter");
app.use("/",router)

app.listen(process.env.PORT||3080);