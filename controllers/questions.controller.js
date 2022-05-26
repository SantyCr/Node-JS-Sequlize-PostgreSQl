const express = require('express');
const sequelize = require('../models/instacia.bd/foros.instacia');
const router = express.Router();

const questions = require('../models/questions.model');

router.get("/questions", (req, res) => {
    try {
        const a = questions.findAll()
            .then(users => {
                res.json(users)
                console.log(users);
            })
        sequelize.authenticate();
    } catch (error) {
        console.log("Error a conectarse a una base de datos");
    }
})

router.post("/questions", (req, res) => {
    console.log(req.body);
    questions.create(req.body).then((result) => {
        console.log(result);
        res.send(result)
    })

})
router.put("/questions", (req, res) => {
    try {
        res.json(questions.update(req.body, {
            where: {
                id: parseInt(req.body.id)
            }
        }))

    } catch (error) {
        res.send("Error al actualizar la base de datos")
    }

})
router.delete("/questions/:id", (req, res) => {
    try {
        questions.destroy({
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