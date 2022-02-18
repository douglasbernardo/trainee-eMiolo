
const express = require("express")
const app = express()

const handleBars = require("express-handlebars")

//rotas
const rotaUsuario = require("./rotas/routesUsuario")

app.engine("handlebars",handleBars.engine())
app.set("view engine","handlebars")

app.use(express.urlencoded({extended: true,}),)
app.use(express.json())

app.get("/myapi/digaOla/:nome",(req,resp)=>{
    resp.status(201).json({
        mensagem:`Hello World, ${req.params.nome}`
    })
})

app.use("/myapi/usuario",rotaUsuario)


app.listen(2000,console.log("servidor rodando na porta 2000"))