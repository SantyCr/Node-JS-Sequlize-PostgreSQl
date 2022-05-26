const express = require('express');
const sequelize = require('../models/instacia.bd/foros.instacia');
const router = express.Router();

const users = require('../models/users.model');

router.get("/users", (req, res) => {
    try {
        const a = users.findAll()
            .then(users => {
                res.json(users)
                console.log(users);
            })
        sequelize.authenticate();
    } catch (error) {
        console.log("Error a conectarse a una base de datos");
    }
})

router.post("/users", (req, res) => {
    console.log(req.body);
    users.create(req.body).then((result) => {
        console.log(result);
        res.send(result)
    })

})
router.put("/users", (req, res) => {
    try {
        res.json(users.update(req.body, {
            where: {
                id: parseInt(req.body.id)
            }
        }))

    } catch (error) {
        res.send("Error al actualizar la base de datos")
    }

})
router.delete("/users/:id", (req, res) => {
    try {
        users.destroy({
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