
const express = require("express")
const app = express()

const handleBars = require("express-handlebars")

//rotas
const rotaUsuario = require("./rotas/routesUsuario")

app.engine("handlebars",handleBars.engine())
app.set("view engine","handlebars")

app.use(express.urlencoded({extended: true,}),)
app.use(express.json())

app.use("/myapi/usuario",rotaUsuario)


app.listen(2000,console.log("servidor rodando na porta 2000"))