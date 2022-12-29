const bodyParser = require("body-parser");
const express = require("express");
const app = express();

//VIEW ENGINE
app.set('view engine', 'ejs');

//STATIC
app.use(express.static('public'));

//BODY-PARSR
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//ROUTES
app.get("/",(req, res) => {
    res.render("index");
});

app.listen(3030, () => {
    console.log("Tudo certo na bahia. Serv rodando na porta 3030");
});