const BMW = function(color) {
  const c = color;
  this.getColor = function() {
    console.log(c);
  }
}

const x5 = new BMW("red");
console.log(x5.c);

let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife:null
}

let json = JSON.stringify(student);

console.log(typeof json);
console.log(json);

const a = Symbol();
const b = Symbol();

console.log(a);
console.log(b);

const id = Symbol('id');


