import superheroes from "superheroes";
var     Names = new Array;
for(let i=0; i<10 ;i++){
     let name = superheroes.random();
     Names[i] = name;   
}
console.log(Names);
// {
//     const name = superheroes.random();
//     console.log('my superhero name is' +name);