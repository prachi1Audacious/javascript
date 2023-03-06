//2nd file

let arr = [{
    id: 1,
    name: "Aman"
}, {
    id: 2,
    name: "Priya"
},
{
    id: 3,
    name: "Urvashi"
},
{
    id: 4,
    name: "Jay"
},
{
    id: 5,
    name: "Aman"
},
{
    id: 6,
    name: "Roshni"
},
{
    id: 7,
    name: "Nikita"
},
{
    id: 7,
    name: "Shiv"
},
{
    id: 8,
    name: "Teena"
},
{
    id: 9,
    name: "Roshni"
}]

//second

const arryId = 6;
const  arry = arr.find(arry => arry.id === arryId);
console.log(arry);
 // output: { id: 6, name: "Roshni" }


//first
const key = arr.filter((ur, ix) => {
    return arr.findIndex((u) => u.name === ur.name) === ix;   });
  key.sort((a, b) => b.name.localeCompare(a.name));
  console.log(key);


