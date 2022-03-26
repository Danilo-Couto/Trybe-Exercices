const errors = {
    messageBlank: 'É obrigatório informar name',
    messageNotString: 'Name deve ser string',
}

const blank = (value) => (!value);
const notString = (value) => (typeof value !== 'string');

const isValidPost = (firstName, middleName, lastName) => {
    const code = 422;

    switch(true) {
        case blank(firstName): return {code, message: errors.messageBlank}
        case blank(lastName): return {code, message: errors.messageBlank}
        case blank(middleName): return {code, message: errors.messageBlank}
    
        case notString(firstName): return {code, message: errors.messageNotString}
        case notString(lastName): return {code, message: errors.messageNotString}
        case notString(middleName):return {code, message: errors.messageNotString}

        default: return {};
    }
};

module.exports = {
    isValidPost
}
