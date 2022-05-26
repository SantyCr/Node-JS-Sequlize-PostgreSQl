const express = require('express');
const sequelize = require('../models/instacia.bd/foros.instacia');
const router = express.Router();

const answers = require('../models/answers.model');

router.get("/answers", (req, res) => {
    try {
        const a = answers.findAll()
            .then(users => {
                res.json(users)
                console.log(users);
            })
        sequelize.authenticate();
    } catch (error) {
        console.log("Error a conectarse a una base de datos");
    }
})

router.post("/answers", (req, res) => {
    console.log(req.body);
    answers.create(req.body).then((result) => {
        console.log(result);
        res.send(result)
    })

})
router.put("/answers", (req, res) => {
    try {
        res.json(answers.update(req.body, {
            where: {
                id: parseInt(req.body.id)
            }
        }))

    } catch (error) {
        res.send("Error al actualizar la base de datos")
    }

})
router.delete("/answers/:id", (req, res) => {
    try {
        answers.destroy({
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