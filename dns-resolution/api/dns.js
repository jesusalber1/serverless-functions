const dns = require('dns').promises;

module.exports = async (req, res) => { 
    const { domain = null } = req.query
    
    if (domain) {
        res.status(200).end(JSON.stringify({
            ipv4: await dns.resolve4(domain).then((address) => address).catch((error) => []),
            ipv6: await dns.resolve6(domain).then((address) => address).catch((error) => [])
        }))
    } else {
        // Bad request
        res.status(400).end('Domain parameter is required')
    }
}

