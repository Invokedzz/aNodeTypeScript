import { callMe } from "./moduleA";
const callCall = new callMe("cat", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
callCall.callAnimal();
callCall.doArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
import { add, subtraction } from "./moduleA";
console.log(add(1,4));
console.log(subtraction(1,4));
export default 1;

