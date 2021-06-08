
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const mysql = require('mysql');
const request = require('request');

//Accesos DB local
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "test_tata",
});

//Configuración de Express 
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*
 * Endpoints Planeta
 */
app.post("/api/importarPlaneta", (req, res) => {
    const idPlaneta = req.query.id;//req.params.id;
    console.log("--------------------------------- idPlaneta " + idPlaneta + "---------------------------------");
    
    //Consume SWAPI
    request.get("https://swapi.py4e.com/api/planets/" + idPlaneta, (error, response, body) => {
        if (error) return console.dir(error);
        const ingles = JSON.parse(body);
        
        //Traduce modelo
        let espaniol = {
            'id': idPlaneta,
            'nombre': ingles.name,
            'clima': ingles.climate,
            'diametro': ingles.diameter,
            'gravedad': ingles.gravity,
            'periodo_orbital': ingles.orbital_period,
            'poblacion': ingles.population,
            'habitantes': ingles.residents,
            'periodo_rotacion': ingles.rotation_period,
            'superficie_agua': ingles.surface_water,
            'terreno': ingles.terrain,
            'peliculas': ingles.films,
            'creado': ingles.created,
            'editado': ingles.edited,
            'url': ingles.url
        };
        let campos = Object.keys(espaniol).map( (key) => {
                if (Array.isArray(espaniol[key])) return espaniol[key].toString();
                return espaniol[key];
            }
        );
        
        //Escribe en base de datos
        const sql = "INSERT IGNORE INTO planeta  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ";
        db.query(sql, campos, (err, result) => {
            if (err) return console.dir(err);
            console.dir("Planeta " + espaniol.nombre + " importado en BD");
            res.send("Planeta " + espaniol.nombre + " importado en BD");
        });
    });
    
});
app.get("/api/leerPlaneta/:id", (req, res) => {
    const sql = "SELECT * FROM planeta WHERE id=?";

    db.query(sql, [req.params.id],(err, result) => {
        //console.dir(result);
        res.send(result);
    });
});



/*
 * Endpoints Persona
 */
app.post("/api/importarPersona", (req, res) => {
    const idPersona = req.query.id;//req.params.id;
    console.log("--------------------------------- idPersona " + idPersona + "---------------------------------");
    
    //Consume SWAPI
    request.get("https://swapi.py4e.com/api/people/" + idPersona, (error, response, body) => {
        if (error) return console.dir(error);
        const ingles = JSON.parse(body);
        
        //Traduce modelo
        let espaniol = {
            'id': idPersona,
            'nombre': ingles.name,
            'altura': ingles.height,
            'masa': ingles.mass,
            'color_cabello': ingles.hair_color,
            'color_piel': ingles.skin_color,
            'color_ojos': ingles.eye_color,
            'anio_nacimiento': ingles.birth_year,
            'sexo': ingles.gender,
            'planeta_natal': ingles.homeworld,
            'peliculas': ingles.films,
            'especies': ingles.species,
            'vehiculos': ingles.vehicles,
            'naves': ingles.starships,
            'creado': ingles.created,
            'editado': ingles.edited,
            'url': ingles.url
        };
        let campos = Object.keys(espaniol).map( (key) => {
                if (Array.isArray(espaniol[key])) return espaniol[key].toString();
                return espaniol[key];
            }
        );
        
        //Escribe en base de datos
        const sql = "INSERT IGNORE INTO persona  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ";
        db.query(sql, campos, (err, result) => {
            if (err) return console.dir(err);
            console.dir("Persona " + espaniol.nombre + " importada en BD");
            res.send("Persona " + espaniol.nombre + " importada en BD");
        });
    });
    
});

app.get("/api/leerPersona/:id", (req, res) => {
    const sql = "SELECT * FROM persona WHERE id=?";

    db.query(sql, [req.params.id],(err, result) => {
        res.send(result);
    });
});


//Habilitando puerto
app.listen(3001, () => {
    console.log("Running on port 3001");
})