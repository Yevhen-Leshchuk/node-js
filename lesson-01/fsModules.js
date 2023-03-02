// const fs = require('fs');
const fs = require('fs').promises;
const path = require('path');

// fs.readFile('./data.txt', 'utf8', (error, data) => {
//   if (error) {
//     console.error(error);
//   }
//   console.log(data);
// });

// fs.readFile(path.resolve('./data.txt'), 'utf8')
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));

// console.log('1231231');

(async () => {
  try {
    // const data = await fs.readFile(path.resolve('./data.txt'), 'utf8');
    // console.log(data);

    // const newContent = `${data} Hello nodeJs`;
    // await fs.writeFile('./data1.txt', newContent, 'utf8');

    // await fs.rename('./dateUtilities.js', './tmp/dateUtilities.js');

    // console.log(await fs.readdir('./tmp'));

    // await fs.unlink('./tmp/deleted.js');

    fs.appendFile('./data.txt', ' write', 'utf8');
  } catch (error) {
    console.log(error);
  }
})();
