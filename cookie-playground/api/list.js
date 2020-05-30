// List all cookies (useful for httpOnly cookies)
module.exports = (req, res) => {
    res.status(200).end(JSON.stringify(req.cookies))
}