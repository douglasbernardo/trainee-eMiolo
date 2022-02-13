
import express from "express"

const app = express()

app.use(express.urlencoded({extended: true,}),)
app.use(express.json())

const path = "C:/trainee-eMiolo/apiNode/form/formulario.html"

app.get("/usuario/formulario",(req,resp)=>{
    resp.sendFile(path)
})

app.post("/usuario/formulario",(req,resp)=>{
    const {nome,idade} = req.body
    resp.status(201).json({
        user:{
            nome: nome,
            idade: idade
        }
    })
})

app.get("/digaOla/:nome",(req,resp)=>{
    resp.status(201).json({
        message:`Hello World, ${req.params.nome}`
    })
})




app.listen(2000,console.log("servidor rodando na porta 2000"))