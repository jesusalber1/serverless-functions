module.exports = (req, res) => {
    const remoteAddress = req.headers['x-real-ip']
    const { output = null } = req.query

    if (output === "json")
        res.status(200).end(JSON.stringify({ ip: remoteAddress }))
    
    res.status(200).end(remoteAddress)
}
