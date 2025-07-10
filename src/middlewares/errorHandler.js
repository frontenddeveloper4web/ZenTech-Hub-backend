
const errorHandler = (err, _req, res, _next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        message: err.message || "Internal server error",
        stack: process.env.NODE_ENV === 'production'? null : err.stack
    });
};

module.exports = errorHandler;