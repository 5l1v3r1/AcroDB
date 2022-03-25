const { db } = require('../acrodb/index');
const test = new db('asd');

async function main() {
  console.log(await test.has('test', 'test'));
}

main()