function getSettings(req, res, next) {
    res.json({
        email: 'matheus@gmail.com'
    });

}

module.exports = { getSettings }