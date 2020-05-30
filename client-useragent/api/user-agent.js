module.exports = (req, res) => {
    res.status(200).end(JSON.stringify(req.headers['user-agent']))
}