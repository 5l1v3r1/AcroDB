const { fs } = require('./constants');
const { add } = require('./add');
const { get } = require('./get');
const { has } = require('./has');

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

  add(key, value) {
    add(this.name, key, value);
  }

  async get(key) {
    const data = await get(this.name, key);
    return data;
  }

  async has(key) {
    const cb = await has(this.name, key)
    return cb;
  }
}

module.exports = {
  db
};