const fs = require('fs');

fs.writeFileSync('./.env', `NAME=${process.env.NAME}\n`)
