const detailUser = async (req, res) => {
    return res.json(req.user)
}

module.exports = {
    detailUser
}