const { fs } = require('./constants');
const { add } = require('./add');

class db {
  constructor(name) {
    this.name = name;
    if(!fs.existsSync('./databases')) fs.mkdirSync('databases')
    if(!fs.existsSync(`./databases/${name}.json`)) {
      fs.writeFileSync(`./databases/${name}.json`, '{}')
    } else {
      console.log(`Detected DB with name "${name}"`)
    }
  }

  add(name, key, value) {
    add(name, key, value);
  }
}

module.exports = {
  db
};