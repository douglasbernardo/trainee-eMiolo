
const router = require("express").Router()

const usuario = require("../controllers/Usuario")

router.get("/calculoImc",usuario.formularioImc)
router.post("/calculoImc",usuario.formularioImcPost)

router.get("/clube",usuario.formularioClube)
router.post("/clube",usuario.formularioClubePost)

router.get("/cursos/:id",usuario.cursos)

router.get("/helloWorld/:nome",usuario.sayHelloWorld)


module.exports = router