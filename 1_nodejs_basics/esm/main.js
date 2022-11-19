// import {a} from "./child.js";
// import child from "./child.js";
import { dirname } from "path";
import { fileURLToPath } from "url";

// console.log('child', child);

//console.log('__dirname', __dirname); // будет ошибка в esm
console.log(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));
//
console.log('__dirname', __dirname);