const toDoPayloadValidator = (req, res, next) => {
    if(!req.body.title || !req.body.body) {
        throw new Error('Invalid payload')
    }
    next()
  };

export default toDoPayloadValidator;