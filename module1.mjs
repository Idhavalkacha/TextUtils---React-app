const a = "Dhaval";
const b = "Paresh";
const c = "Shubham";
const d = "Nilesh";

// exporting using default mode,
// so i can import it in other file using the any name its not necessary to export it using name b.
export default b;

// below variables are not exporting using default mode, 
// so if i have to these variables in  any other file then i have to use the same variable name 
// also i have to import it using the {}.
export {a};
export {c};
export {d};
