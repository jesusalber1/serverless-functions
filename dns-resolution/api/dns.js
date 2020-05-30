const dns = require('dns').promises;

module.exports = async (req, res) => { 
    const { hostname = null } = req.query
    
    if (hostname) {
        res.status(200).end(JSON.stringify({
            ipv4: await dns.resolve4(hostname).then((address) => address).catch((error) => []),
            ipv6: await dns.resolve6(hostname).then((address) => address).catch((error) => [])
        }))
    } else {
        // Bad request
        res.status(400).end('Hostname parameter is required')
    }
}

