class AppError extends Error{
    constructor( status, message) {
        super(message);
        this.name = this.constructor.name;
        this.status = status;
        Error.captureStackTrace(this);
    }
}

module.exports = AppError;