 //const child = require('./child'); // import * as child from './child';
 // const {a} = require('./child'); // import {a} from './child';
 require("./child");

 // console.log("child:", child);
 // console.log("a:", a);

 // console.log('__dirname', __dirname);
 // console.log('__filename', __filename);
 // console.log("global.test", global.test); //работать через global не желательно
 // console.log("process.env.TEST", process.env.TEST);
 // console.log("process.argv", process.argv);
 // console.log("process.env", process.env);
 // console.log("process.env.HELLO", process.env.HELLO);
 // process.exit(-1);
 // console.log("process.env.ENV", process.env.ENV);
 // console.log("process.cwd()", process.cwd());

 //Graceful shutdown
 process.on("SIGINT", () => {
 console.log("SIGINT called");
})
 setTimeout(()=>console.log("finished"),10000);

