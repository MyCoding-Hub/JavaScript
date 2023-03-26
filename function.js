function fun( who ) {
    console.log(`hello, ${who}`);
}
fun('welcome');

function fullname(first,second){
    console.log(`${first +  second}`);
}
fullname('thunder','boy');

function fullname2 (first,second) {
    console.log(`${first} ${second}`);
}
let name= 'Lion';
fullname2(name,'King');

if(name == 'Lion'){
    console.log('Shimba');
    name = 'shimba';
}

console.log(name);

function add(a,b) {
    console.log(a +b);
}
add(5,6);

/*let minus = function(a,b) {
    console.log(a - b);
} 
minus(3,1); */

function mul(a,b){
    var multi = a * b;
    return multi;
}
console.log(mul(4,5));
console.log(`your score is ${mul(4,5)}`);
