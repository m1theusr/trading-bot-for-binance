function doLogin(req, res, next) {

        const email = req.body.email;
        const password = req.body.password;

        if (email === 'matheus@gmail.com'
            && password === '123') {
            res.sendStatus(200);

        } else
            res.sendStatus(401);
}
function doLogout(req, res, next) {
        res.sendStatus(200);
}

module.exports = {
    doLogin,
    doLogout

}