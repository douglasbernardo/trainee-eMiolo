
import express from "express"
import handleBars from "express-handlebars"

const app = express()

app.engine("handlebars",handleBars.engine())
app.set("view engine","handlebars")

app.use(express.urlencoded({extended: true,}),)
app.use(express.json())

const path = "C:/trainee-eMiolo/apiNode/form"

app.get("/myapi/usuario/formulario",(req,resp)=>{
    resp.sendFile(`${path}/formulario.html`)
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

app.get("/myapi/usuario/calculoImc",(req,resp)=>{
    resp.sendFile(`${path}/formImc.html`)
})

app.post("/myapi/usuario/calculoImc",(req,resp)=>{
    const {nome,peso,altura} = req.body

    if(!nome){
        resp.status(201).json({
            mensagem: "O nome não pode ser vazio"
        })
        return
    }

    if(!peso){
        resp.status(201).json({
            mensagem: "O peso não pode ser vazio"
        })
        return
    }
    if(!altura){
        resp.status(201).json({
            mensagem: "A altura não pode ser vazia"
        })
        return
    }

    const calculo = peso / (altura * altura)
 
    let msg = "" //mensagem da classificação
    

    if(calculo < 18.5){
        msg = "Abaixo do normal"
    }
    if(calculo > 18.5 && calculo < 24.9){
        msg = "Peso normal"
    }
    if(calculo > 25 && calculo < 29.9){
        msg = "Sobrepeso"
    }
    if(calculo > 30 && calculo < 34.9){
        msg = "Obesidade Grau I"
    }
    if(calculo > 35 && calculo < 39.9){
        msg = "Obesidade Grau II"
    }

    console.log("A mensagem:"+msg)

    resp.status(201).json({
        mensagem:"Seu resultado",
        usuario:{
            "nome": nome,
            "imc" : calculo.toFixed(2),
            "classificacao" : msg
        }
    })

    console.log(usuario)
})

const cursos = [
    {id:1 , nome:"Engenharia de software."},
    {id:2 , nome:"Economia."},
    {id:3, nome:"Quimica."},
    {id:4, nome:"Administração."},
    {id:5, nome:"Arquitetura e Urbanismo."},
    {id:6, nome:"Educação Física."},
    {id:7, nome:"Enfermagem."},
    {id:8, nome:"Ciências Contábeis."},
    {id:9, nome:"Educação Física."},
    {id:10, nome:"Direito."}
]
app.get("/myapi/cursos/:id",(req,resp)=>{

    const curso = cursos.find((c) => c.id === parseInt(req.params.id))

    if(!curso)
        resp.status(401).json({
            mensagem:"Curso com esse id não foi encontrado"
        })
 
    resp.status(201).json({
        curso:{
            "id": curso.id,
            "nome": curso.nome
        }
    })
})

app.get("/myapi/digaOla/:nome",(req,resp)=>{
    resp.status(201).json({
        mensagem:`Hello World, ${req.params.nome}`
    })
})



app.listen(2000,console.log("servidor rodando na porta 2000"))