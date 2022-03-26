let userName: string = "Jack";
let hasLoggedIn: boolean = true;

//command K + I gives you the type in vs code

userName += " Rex";

console.log(hasLoggedIn);

let myNumber: number = 1;

let myRegex: RegExp = /fdf-gi/;

const names: string[] = userName.split(" ");
const myValues: Array<number> = [1, 2, 3, 4];

interface person {
  first: string;
  last: string;
  cool: boolean;
}

//interfaces are useful for reuse of types

const myPerson: person = {
  first: "Kevin",
  last: "Mason",
  cool: true,
};

const ids: Record<number, string> = {
  1: "k",
};

ids[20] = "m";

if (ids[20] === "k") {
  console.log("checks types of comparison");
}

for (let i = 0; i < 7; i++) {
  //its fine to let typescript infer the type here
  console.log(i);
}

[1, 2, 3].forEach((num) => {
  console.log(num);
  //again this is infered to be a number type
});

//same thing for map etc...
