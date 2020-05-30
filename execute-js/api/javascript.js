
module.exports = (req, res) => {
    const { code = null } = req.query

    if (code) {
        const html =
            `<!DOCTYPE html>
            <html>
                <body>
                <script>
                    document.write(${code});
                </script>
                </body>
            </html>`
        res.status(200).end(html)
    } else {
        res.status(400).end('Required parameters are missing')
    }
}