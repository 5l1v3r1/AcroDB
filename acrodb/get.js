const { fs } = require('./constants');

const get = async (db, key) => {
  try {
    const data = JSON.parse(fs.readFileSync(`./databases/${db}.json`));
    const returnData = data[key];
    return returnData;
  } catch(err) {
    console.log('Can\'t get db data')
  }
}

module.exports = {
  get
}