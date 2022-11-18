// Write your solution here!
const cats =["Milo","Otis","Garfield"]

function destructivelyAppendCat(name){
   return cats.push("Ralph");
}
function destructivelyPrependCat(name){
    cats.unshift(name);

}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()

}
function appendCat(name){
    const appendCat = [...cats, name];
    return appendCat;  


}
function prependCat(name){
    const prependCat = [name, ...cats];
    return prependCat;


}
function removeFirstCat(){
    const removeFirstCat = cats.slice(1)
    return removeFirstCat;

}
function removeLastCat(){
    const removeLastCat = cats.slice(0,cats.length-1);
    return removeLastCat;


}
console.log(cats.length)
console.log(removeLastCat())