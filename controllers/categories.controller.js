const express = require('express');
const sequelize = require('../models/instacia.bd/foros.instacia');
const router = express.Router();

const categories= require('../models/categories.model');

router.get("/categories", (req, res) => {
    try {
        const a = categories.findAll()
            .then(users => {
                res.json(users)
                console.log(users);
            })
        sequelize.authenticate();
    } catch (error) {
        console.log("Error a conectarse a una base de datos");
    }
})

router.post("/categories", (req, res) => {
    console.log(req.body);
    categories.create(req.body).then((result) => {
        console.log(result);
        res.send(result)
    })

})
router.put("/categories", (req, res) => {
    try {
        res.json(categories.update(req.body, {
            where: {
                id: parseInt(req.body.id)
            }
        }))

    } catch (error) {
        res.send("Error al actualizar la base de datos")
    }

})
router.delete("/categories/:id", (req, res) => {
    try {
        categories.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send("Eliminacion exitosa")
    } catch (error) {
        res.send("No se pudo eliminar la respuesta")
    }
})


module.exports = router;