const BMW = function(color) {
  const c = color;
  this.getColor = function() {
    console.log(c);
  }
}

const x5 = new BMW("red");
console.log(x5.c);
