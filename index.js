const express = require("express");
const app = express(); //obtiene el objeto express

app.get("/", (require, res) => {
  res.send("PETICION GET RECEIVED"); //responde la petición
}); //recibe una peticion HTTP(get) y realiza algo

// Creación de Router
app.post("/about", (require, res) => {
  res.send("POST REQUEST RECEIVED"); //responde la petición
});

app.put("/contact", (require, res) => {
  res.send("UPDATE REQUESR RECEIVED"); //responde la petición
});

app.delete("/test", (require, res) => {
  res.send("<h1>DELETE REQUEST RECEIVED</h1>"); //responde la petición
});

app.listen(5000, () => {
  console.log("Serve on port 5000");
}); //levantar el servicio
