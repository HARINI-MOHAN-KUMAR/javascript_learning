let s=45;
let s1="45";
console.log(s+s1);
console.log(typeof(s+s1));
//number
//implicit
console.log(10+false);
console.log(10+true);
console.log(10+undefined);
console.log(10+null);
console.log(10+NaN);
console.log(10+Infinity);
console.log(10+[1]);
console.log(10+{})
//explicit
console.log(10 + Number("10"));
console.log(Number(" "));
console.log(Number("abc"));
console.log(Number(false));

console.log(Number(null));
console.log(Number(NaN));
console.log(Number([1,2]));
console.log(Number({}));
console.log(Boolean("10"));
console.log(Boolean(""));
console.log(Boolean(0));
