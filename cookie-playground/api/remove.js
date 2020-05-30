const expirationDate = 'Thu, 01 Jan 1970 00:00:00 GMT'
const domain = 'jesusalberto.me'

// Remove cookies by setting expired date
module.exports = (req, res) => {
    const { name = null } = req.query

    if (name) {
        // Set header and send response
        res.setHeader('Set-Cookie', `${name}=undefined; expires=${expirationDate}; domain=${domain}`)
        res.status(200).end(`Remove cookie '${name}'`)
    } else {
        // Bad request
        res.status(400).end('Required parameters are missing')
    }
}