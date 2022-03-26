import { getName } from "./functions";
import introduce, { addStrings, printFormat } from "./functions";

console.log(printFormat("Rex", "Mason"));

console.log(introduce("hello", "Rex", "Kevin", "John"));
console.log(getName({ first: "rex", last: "mason" }));
