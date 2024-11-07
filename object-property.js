const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 32, name: 'Mannna'},
    {id: 41, name: 'Moyouri'},
    {id: 71, name: 'Dipjol'}
];

// const output = [];

// for (let i = 0; i< students.length; i++){
//     const element = students[i];
//     element = element[students.name];
//     output.push(result);

// }

const names = students.map( s => s.name);
const ids = students.map( s => s.id);
const bigger = students.filter( s => s.id>40);
const biggerOne = students.find( s => s.id>40);
console.log(biggerOne);