const express = require('express');
const bodyParser = require('body-parser');
const middlewares = require('./middlewares');
const app = express();
app.use(bodyParser.json());

const PORT = 3000;

const {getAll, getById, creatUser, editUser, deleteUser} = require('./models/User');

const { isValidNames, isValidEmail, isValidPassword} = require('./middlewares/validators')

app.get('/user', async (_req, res) => {
    try {
        const users = await getAll();
        return res.status(200).json(users || []);    
    } catch (error) {
        console.log(error);
        return res.status(500).end();
    }
});

app.get('/user/:id', async (req, res) => {
    try {
        const user = await getById(req);
        if (!user || user.length === 0) {return res.status(404).json({ message: 'Not found' });}
        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).end();
    }
});

app.post('/user/', isValidNames, isValidEmail, isValidPassword, async (req, res) => {
    try {
        const newUser = await creatUser(req);
        return res.status(201).json(newUser);
    } catch (error) {
        console.log(error);
        return res.status(500).end();
    }
});

app.put('/user/:id', isValidNames, isValidEmail, isValidPassword, async (req, res) => {
    try {
        const userEdited = await editUser(req);
        if (!userEdited || userEdited.length === 0) {return res.status(404).json({ message: 'User not found' });}
        return res.status(200).json(userEdited);
    } catch (error) {
        console.log(error);
        return res.status(500).end();
    }
});

app.delete('/user/:id', async (req, res) => {
    try {
        await deleteUser(req);
        return res.status(200).end();
    } catch (error) {
        console.log(error);
        return res.status(500).end();
    }
});

/* // ----
// Dizemos para o express que toda requisição enviada para `POST /user` deve ser tratada pelo middleware `createUser`
app.post('/user', middlewares.createUser);

app.use(middlewares.error);
 */

// Iniciamos o servidor
app.listen(PORT, () => { console.log(`App listening on port ${PORT}`); });
