const marvel_heros = ["ironman", "thor", "mrus"]
const dc_heros = ["superman", "saktiman", "iroes"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros);
//console.log(marvel_heros[3][0]);

//const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);

//const all_new_Heros = [...marvel_heros, ...dc_heros]
//console.log(all_new_Heros);

//const another_array = [1, 2, 3, [4, 5, 6], 7, [4, 5, [3,2]]]

//const real_another_array = another_array.flat(Infinity)

//console.log(real_another_array);

console.log(Array.isArray("kishan"));
console.log(Array.from("kishan"));

console.log(Array.from({name: "kishan"}));  //intresting give them key or value which print

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));