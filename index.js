const express = require('express')
const app = express()
const cors = require('cors');
const helmet = require('helmet');

const answers = require('./controllers/answers.controller.js');
const categories = require('./controllers/categories.controller.js');
const questions = require('./controllers/questions.controller.js');
const users = require('./controllers/users.controller.js');

const sequelize = require('./models/instacia.bd/foros.instacia.js');

//Middlewares
app.use(express.json());


//Seguridad
app.use(cors());
app.use(helmet());
app.disable('x-powered-by');

//Rutas
app.use(answers)
app.use(categories)
app.use(questions)
app.use(users)

try {
        sequelize.authenticate();
        sequelize.sync().then(() => {
           console.log("sincronizacion correcta");
       }).catch((err) => {
           console.log("No se pudo sincroizar"+err);
       })
       
} catch (error) {
    console.log("No se pudo sincronizar la tabla de datos");
}

let x = 22+7+"b"+5+4
console.log(x);

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))