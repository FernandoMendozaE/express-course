const express = require("express");
var morgan = require('morgan')
const app = express(); //obtiene el objeto express

// Settings
app.set('appName', 'Fazt express Tutorial');
app.set('port', 3000);
app.set('view engine', 'ejs');

// Middlewares
/**
 * Procesa datos antes de llegar a las rutas
 */
app.use(express.json()); // linea de código encargado de hacer conocer el formato JSON
app.use(morgan('dev'));

// Routes

// app.all("/user", (req, res, next) => {
//   console.log("Por aqui paso");
//   next();
// }); // método express encargado de que pasen toda las rutas al (/user)

app.get('/', (req, res) => {
  const data = [{ name: 'John' }, { name: 'Joe' }, { name: 'Cameron' }, { name: 'Ryan' }]
  res.render('index.ejs', { people: data })
}); // Renderiza la pantalla index.ejs tambien envia datos

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

app.use(express.static('public')); // Se ejecuta el middlewares si no entra a las turas

app.listen(app.get('port'), () => {
  console.log(app.get('appName'));
  console.log("Serve on port", app.get('port'));
}); //levantar el servicio
