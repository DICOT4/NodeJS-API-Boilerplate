exports.printer = (req, res, next) => {
    console.log("Auth middleware");
    next();
};
