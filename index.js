const express = require("express");
const app = express(); //obtiene el objeto express

app.use(express.json()); // linea de código encargado de hacer conocer el formato JSON

app.all("/user", (req, res, next) => {
  console.log("Por aqui paso");
  next();
}); // método express encargado de pasen toda las ruras (/user)

app.get("/user", (req, res) => {
  res.json({
    username: "Cameron",
    lastname: "Howe"
  }); //responde la petición
}); //recibe una peticion HTTP(get) y realiza algo

// Creación de Router
//:id : request parms (parametro recivido mediante la url)
app.post("/user/:id", (req, res) => {
  console.log(req.body); //obtiene datos del rquest json
  console.log(req.params); //obtiene  datos del id (url) parametros
  res.send("POST REQUEST RECEIVED"); //request post
});

app.put("/user/:userId", (req, res) => {
  console.log(req.body);
  res.send(`User ${req.params.userId} update`);
});

app.delete("/user/:id", (req, res) => {
  res.send(`User ${req.params.id} deleted`); //responde la petición
});

app.listen(5000, () => {
  console.log("Serve on port 5000");
}); //levantar el servicio
