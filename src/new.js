import _ from 'lodash';
import { a } from "./utils.js";

const array = [1, 2, 3, 4, 5];
const reversedArray = _.reverse([...array]);

console.log(reversedArray);  // [5, 4, 3, 2, 1]
console.log(a);
