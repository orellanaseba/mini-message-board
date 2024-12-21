const express = require("express")
const app = express()
const bodyParser = require("body-parser") // Para procesar los datos enviados en formulario
const path = require("node:path")

// ROUTERS
const messageRouter = require("../routes/messageRouter") // Importar enrutador
const { indexRouter } = require("../routes/indexRouter")

const PORT = 3000

app.set("views", path.join(__dirname, "../views"))
app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({ extended: true }))
app.use("/new", messageRouter)
app.use("/", indexRouter)

app.listen(PORT, () => {
    console.log("Servidor escuchando en el puerto:", PORT);
})