const fs = require('fs')
const token = "76226a6bdec1c2db9a225d9fb6157e24a7459ed9"
fs.writeFileSync('./.env', `token=${token}\n`)
