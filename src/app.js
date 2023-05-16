const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const web = require("./routes/web");
const path = require("path");


app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));





app.use(web);

app.listen(port,()=>{
    console.log("puerto corriendo en el puerto", port);
})



