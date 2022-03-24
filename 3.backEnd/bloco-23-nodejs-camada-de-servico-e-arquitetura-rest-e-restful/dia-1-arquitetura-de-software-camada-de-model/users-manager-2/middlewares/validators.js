const isValidNames = (req, res, next) => {
    const { firstName, lastName } = req.body;
    if (!firstName) return res.status(400).json({ message: 'O campo "firstName" é obrigatório' });
    if (!lastName) return res.status(400).json({ message: 'O campo "lastName" é obrigatório' });
    next();
};

const isValidEmail = (req, res, next) => {
    const validEmail = /\S+@\S+\.\S+/;
    const {email} = req.body;

    if (!email) return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    if (validEmail.test(email) === false) return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
    next();
};

const isValidPassword = (req, res, next) => {
    const { password } = req.body;
    if (!password) {
        return res.status(400).json({ message: 'O campo "password" é obrigatório' });
    }
    if (password.length < 6) {
        return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
    }
    next();
};

module.exports = {
    isValidNames,
    isValidEmail,
    isValidPassword,
};