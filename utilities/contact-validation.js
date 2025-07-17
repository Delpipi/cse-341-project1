const { param, body, validationResult } = require('express-validator');
const httpStatusCodes = require('./http-status-code');
const Validate = {};

/****************************
***** VALIDATION RULES  ****
*****************************/
Validate.contactIdRules = () => {
    //Valid contact id required
    return [
        param("id")
            .trim()
            .notEmpty().withMessage('Contact id is required')
            .isMongoId().withMessage('Invalid Contact id')
    ]
}

Validate.contactRules = () => {
    //Valid contact id required
    return [
        body("firstName")
            .trim()
            .notEmpty().withMessage('Please provide first name')
            .isString()
            .isLength({ max: 30 }).withMessage('First name must be maximum 30 characters'),
        
        body("firstName")
            .trim()
            .notEmpty().withMessage('Please provide last name')
            .isString()
            .isLength({ max: 80 }).withMessage('Last name must be maximum 80 characters'),
        
        body("email")
            .trim()
            .notEmpty().withMessage('Please provide email')
            .isEmail()
            .normalizeEmail()
            .withMessage('A valid email is required'),
        
        body("favoriteColor")
            .trim()
            .notEmpty().withMessage('Please provide email')
            .isString()
            .isLength({ max: 10 }).withMessage('Favorite color must be maximum 10 characters'),
        
        body("birthday")
            .trim()
            .notEmpty()
            .isString()
            .withMessage('Please provide birthday')
    ]
}

/****************************
***** CHECK RULES  **********
*****************************/
Validate.checkRules = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const extractedErrors = [];
        errors.array().map(err => extractedErrors.push({[err.path]: err.msg }))
        return res.status(httpStatusCodes.UNPROCESSABLE_ENTITY).json({
            errors: extractedErrors,
        });
    }
    next();
}


module.exports = Validate;