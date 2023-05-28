const express = require("express"); // Importar express
const router = express.Router();
const cuadrado = require("../calculos");

router.get('/calculos/:width', (req, res) => {
 const { width } = req.params;
 let a = cuadrado.area(width);
 let b = cuadrado.perimetro(width);
 console.log(width, a, b);
 res.send({
 ancho: width,
 area: a,
 perimetro: b
 });
});

router.get("/", (req, res) => {
    res.send({ message: "hola mundo soy Montserrat :D" });
  });
  
  router.get("/ayuda/:name", (req, res) => {
    res.send({ message: `Hola ${req.params.name} en que te ayudo` });
  });
  
  router.get("/prueba", (req, res) => {
    res.send({ message: `Hola ${req.query.name} ${req.query.apellido}` });
  });
  
  router.get("/datos", (req, res) => {
    res.send({
      secretBase: "Super tower",
      active: true,
      members: [
        {
          name: "Montserrat",
          age: 29,
          secretIdentity: "Dan Jukes",
          powers: ["Radiation resistance", "Turning tiny", "Radiation blast"],
        },
        {
          name: "Madame Uppercut",
          age: 39,
          secretIdentity: "Jane Wilson",
          powers: [
            "Million tonne punch",
            "Damage resistance",
            "Superhuman reflexes",
          ],
        },
        {
          name: "Eternal Flame",
          age: 1000000,
          secretIdentity: "Unknown",
          powers: [
            "Immortality",
            "Heat Immunity",
            "Inferno",
            "Teleportation",
            "Interdimensional travel",
          ],
        },
      ],
    });
  });
  
  /* Checarlo en POSTMAN */
  router.post("/ayuda", (req, res) => {
    console.log("Cuerpo de la peticion: ", req.body);
    res.send({
      message: "Hola mundo en que te puedo ayudar, SOY UNA PETICIONPOST",
    });
  });
  
  router.post("/producto", (req, res) => {
    console.log("Cuerpo de la peticion: ", req.body);
    //La sintaxis de desestructuración es una funcionalidad que vino
    // junto con ES6. Es una expresión de JavaScript que permite
    //desempacar valores de arreglos o propiedades de objetos en distintasvariables;
    const { nombre, sueldo, categoria } = req.body;
    console.log(nombre);
    console.log(sueldo);
    console.log(categoria);
    res.send({ message: "El producto se ha recibido" });
  });
  
  // API que combina TODOS los parámetros
  router.post("/producto/:id", (req, res) => {
    const { id } = req.params;
    const { motor } = req.query;
    const { precio } = req.body;
    console.log(id, motor, precio);
    res.json({
      stockmin: 10,
      stockmax: 15,
      existencia: 7,
    });
  });

  module.exports = router;