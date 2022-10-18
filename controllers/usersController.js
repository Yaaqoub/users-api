

const createUser = async function(req, res, next) {
    return res.status(200).send({
        message: 'yaaay it works!!'
    });
};

module.exports = {
    createUser
}
