function addNumbers(a: number, b: number): number {
  return a + b;
}

export const addStrings = (str1: string, str2: string = "default"): string => {
  return str1 + " " + str2;
};

//the | indicates a union type

export const format = (title: string, param: string | number): string => {
  return title + " " + param; //its fine to use type coersion
};

export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param));
};

//the ... is the rest operator for overloading
// https://www.tutorialsandyou.com/javascript/rest-operator-in-javascript-1.html

function introduce(salutaion: string, ...names: string[]): string {
  return `${salutaion} ${names.join(" ")}`;
}

export function getName(user: { first: string; last: string }): string {
  return `${user?.first ?? "first"} ${user?.last ?? "last"}`;
} //the ? operator makes sure user is defined before you dereference it
// the ?? is the null coellese operator which sets the output to a default value if not defined

export default introduce;
