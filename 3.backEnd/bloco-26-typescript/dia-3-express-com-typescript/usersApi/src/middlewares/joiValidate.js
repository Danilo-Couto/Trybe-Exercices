const joiValidate = (schema) => (req, _res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return next({ code: 'badRequest', message: error.details[0].message });
  return next();
};

module.exports = joiValidate;
