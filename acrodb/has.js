const { fs } = require('./constants');

const has = async (db, key) => {
  const data = JSON.parse(fs.readFileSync(`./databases/${db}.json`));
  if(data[key]) return true;
  return false;
}

module.exports = {
  has
}