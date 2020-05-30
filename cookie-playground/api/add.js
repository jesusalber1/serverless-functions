const sameSiteValues = ['Strict', 'Lax', 'None']
const domain = 'jesusalberto.me'

// Set cookies from parameters
module.exports = (req, res) => {
    const {
        name = '',
        value = '',
        maxAge = '',
        expires = '', // alternative to Max-Age
        secure = false,
        httpOnly = false,
        sameSite = ''
    } = req.query

    if (name && value) {
        // Create cookie string with existing data
        const cookieString = [
            `${name}=${value}`,
            (maxAge) ? `Max-Age=${maxAge}` : '',
            (!maxAge && expires) ? `expires=${expires}`: '',
            (secure) ? 'Secure' : '',
            (httpOnly) ? 'HttpOnly' : '',
            (sameSite && sameSiteValues.includes(sameSite)) ? `SameSite=${sameSite}` : '',
            `domain=${domain}`
        ].filter(a => a).join('; ')

        // Set header and send response
        res.setHeader('Set-Cookie', cookieString)
        res.status(200).end(`Create cookie '${name}'`)
    } else {
        // Bad request
        res.status(400).end('Required parameters are missing')
    }
}