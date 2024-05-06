//[]
//[{}, {}, {}]

const arr = [1, 2, 3, 4]

for (const num of arr) {
    //onsole.log(num);
}

const greetings= "hello world"

for (const greet of greetings) {
    //console.log(`the value is ${greet}`);
    
}

const map = new Map();

map.set('IN', "INDIA")
map.set('Aus', "Australia")
map.set('USA', "United States Of Amerika")

//console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value);
}