const { fs } = require('./constants');

const add = async (db, key, value) => {
  try {
    const data = JSON.parse(fs.readFileSync(`./databases/${db}.json`));
    const newData = {...data, [key]: value};
    const dataStr = JSON.stringify(newData);
    fs.writeFileSync(`./databases/${db}.json`, dataStr);
  } catch(err) {
    console.log(err);
    console.log(`Database with name ${db} not found`);
  }
}

module.exports = {
  add
}