const { Router } = require("express")
const indexRouter = Router()

const messages = [
    {
      id: 1,
      message: "Hi there!",
      username: "Amando",
      added: new Date().toLocaleString("es-AR")
    },
    {
      id: 2,
      message: "Hello World!",
      username: "Charles",
      added: new Date().toLocaleString("es-AR")
    },
];

indexRouter.get("/", (req, res) => {
  console.log(messages)
  res.render("../views/index", { messages })
})

indexRouter.get("/:messageId", (req, res) => {
  const { messageId } = req.params
  const message = messages.find(msg => msg.id === +messageId)
  
  if(message) {
    res.render("messageDetails", { message })
  }
  else {
    res.status(404).send("Message not found.");
  }
})

module.exports = { indexRouter, messages }