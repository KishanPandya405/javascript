// Immediately Invoked Function Expressions (IIFE) 
// globel scop polucian reduce 


(function ap(){
    //named iife
    console.log(`Db Connect`);
}) (); // iife

( (name) => {
    //unnamed iife
    console.log(`Db Connected successfully ${name}`);
}) ("kishan")  // Arrow function