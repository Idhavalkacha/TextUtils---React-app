// dz is export default variable, 
// while {a,c,d} is not exported via default mode so have to use {} and same name.
import dz, {a,c,d} from './module1.mjs';

console.log(dz);
console.log(a)
console.log(c)
console.log(d)