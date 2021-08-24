const students =[
    {id:32,name:'khan'},
    {id:22,name:'an'},
    {id:42,name:'akhan'}
];
const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter( s => s.id>40);
const search = students.find( s => s.id>40);

console.log(names,ids,bigger,search);
