const JOI = require('joi');
const Cep = require('../2.services/Cep');

const getAll = async (_req, res) => {
    //return res.status(200).json({ message: "pong!" });
    const addresses = await Cep.getAll();
    return res.status(200).json(addresses);
};

const findAddressByCep = async(req, res, next) => {
    const {cep} = req.params;

    const address = await Cep.findAddressByCep(cep);
    if (address.error) return next (address.error);

    return res.status(200).json({ address });
};

const createAddress = async (req, res, next) => {
    const { cep, logradouro, bairro, localidade, uf } = req.body;

    const requiredNonEmptyString = JOI.string().not().empty().required();

    const { error } = JOI.object({
        cep: JOI.string().regex(/\d{5}-\d{3}/).required(),
        logradouro: requiredNonEmptyString,
        bairro: requiredNonEmptyString,
        localidade: requiredNonEmptyString,
        uf: requiredNonEmptyString.length(2),
    }).validate(req.body);

    if (error) return next(error);

    const newAddress = await Cep.createAddress(cep, logradouro, bairro, localidade, uf);

    if (newAddress.error) return next (newAddress.error);

    return res.status(200).json(newAddress);
};

module.exports = {
    getAll,
    findAddressByCep,
    createAddress
}
