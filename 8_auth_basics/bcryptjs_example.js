const bcryptjs = require('bcryptjs');

async function main() {
  const password = 'qwerty';

  const passwordHash = await bcryptjs.hash(password, 10);
  console.log(passwordHash);
  console.log(await bcryptjs.compare(password, passwordHash));
}
main();
