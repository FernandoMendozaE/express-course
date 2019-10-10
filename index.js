const express = require("express");
const app = express(); //obtiene el objeto express

app.get("/", (require, res) => {
  res.send("Hello World"); //responde la petición
}); //recibe una peticion HTTP(get) y realiza algo

app.listen(3000, () => {
  console.log("Serve on port 3000");
}); //levantar el servicio
