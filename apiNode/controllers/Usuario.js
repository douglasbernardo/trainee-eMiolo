
const path = require("path").join(__dirname,"../form")

class Usuario 
{   
    static formularioImc(req,res){
        res.sendFile(`${path}/formularioImc.html`)
        console.log(path)
    }
    static formularioImcPost(req,res){
        const {nome,peso,altura} = req.body

        if(!nome){
            res.status(201).json({
                mensagem: "O nome não pode ser vazio"
            })
            return
        }

        if(!peso){
            res.status(201).json({
                mensagem: "O peso não pode ser vazio"
            })
            return
        }
        if(!altura){
            res.status(201).json({
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

        res.status(201).json({
            mensagem:"Seu resultado",
            usuario:{
                "nome": nome,
                "imc" : calculo.toFixed(2),
                "classificacao" : msg
            }
        })
    }

    static formularioClube(req,res){
        res.sendFile(`${path}/formularioClube.html`)
    }

    static formularioClubePost(req,res){
        const {nome,idade} = req.body

        if(!nome){
            res.status(201).json({
                mensagem: "O nome não pode ser vazia"
            })
            return
        }
    
        if(!idade){
            res.status(201).json({
                mensagem: "A idade não pode ser vazia"
            })
            return
        }
        if(idade < 18){
            res.status(201).json({
                mensagem:`Usuario ${nome} não tem idade para ser um participante do clube`
            })
            return
        }
    
        res.status(201).json({
            mensagem:"Dados cadastrados para entrar no clube",
            usuario:{
                nome: nome,
                idade: idade
            }
        })
    }

    static cursosEscolha(req,res){
        
        const cursos = [
            {id:1,nome:"Engenharia de software."},
            {id:2,nome:"Economia."},
            {id:3,nome:"Quimica."},
            {id:4,nome:"Administração."},
            {id:5,nome:"Arquitetura e Urbanismo."},
            {id:6,nome:"Educação Física."},
            {id:7,nome:"Enfermagem."},
            {id:8,nome:"Ciências Contábeis."},
            {id:9,nome:"Educação Física."},
            {id:10,nome:"Direito."}
        ]

        const curso = cursos.find((c) => c.id === parseInt(req.params.id))

        if(!curso)
            res.status(401).json({
                mensagem:"Curso com esse id não foi encontrado"
            })
     
        res.status(201).json({
            curso:{
                "id": curso.id,
                "nome": curso.nome
            }
        })
    }

    static sayHelloWorld(req,res){
        res.status(201).json({
            mensagem:`Hello World`
        })
    }
}

module.exports = Usuario