
import express from "express"
import handleBars from "express-handlebars"

const app = express()

app.engine("handlebars",handleBars.engine())
app.set("view engine","handlebars")

app.use(express.urlencoded({extended: true,}),)
app.use(express.json())

const path = "C:/trainee-eMiolo/apiNode/form/formulario.html"

app.get("/myapi/usuario/formulario",(req,resp)=>{
    resp.sendFile(path)
})

app.post("/myapi/usuario/formulario",(req,resp)=>{
    const {nome,idade} = req.body

    if(!nome){
        resp.status(201).json({
            mensagem: "O nome não pode ser vazia"
        })
        return
    }

    if(!idade){
        resp.status(201).json({
            mensagem: "A idade não pode ser vazia"
        })
        return
    }
    if(idade < 18){
        resp.status(201).json({
            mensagem:`Usuario ${nome} não tem idade suficiente para entrar para o clube`
        })
        return
    }

    resp.status(201).json({
        mensagem:"Dados cadastrados para entrar no clube",
        usuario:{
            nome: nome,
            idade: idade
        }
    })
})

app.get("/myapi/v1/usuarios",(req,resp)=>{
    resp.render("usuarios",{layout:false})
})





app.get("/myapi/digaOla/:nome",(req,resp)=>{
    resp.status(201).json({
        mensagem:`Hello World, ${req.params.nome}`
    })
})




app.listen(2000,console.log("servidor rodando na porta 2000"))