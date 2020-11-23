const fs = require('fs')
fs.writeFileSync('./.env', `token=${process.env.token}\n`)
