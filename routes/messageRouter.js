const { Router } = require("express")
const messageRouter = Router()
const { messages } = require("../routes/indexRouter")

let id = 3;

// Ruta para mostrar el formulario con método GET
messageRouter.get("/", (req, res) => {
    res.render("../views/form")
})

// Ruta para mostrar el formulario con método POST
messageRouter.post("/", (req, res) => {
    const { username, message } = req.body // Captura el mensaje enviado desde el formulario
    console.log(username, "te ha enviado un mensaje.")
    console.log("Nuevo mensaje recibido:", message)
    messages.push({id, username, message, added: new Date().toLocaleString("es-AR") })
    id++
    res.redirect("/")
})

module.exports = messageRouter
