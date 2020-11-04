
// Display list of all Authors.
exports.index = function(req, res) {
    res.status(200)
        .json({
            'response': 'success',
            'data': 'Welcome!'
        });
};
