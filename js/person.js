const person = {
  _name: "nsjsoft",

  set name(value) {
    this._name = value;
  }
}

person._name = "pos";
console.log(person._name);
person.name = "nsj";
