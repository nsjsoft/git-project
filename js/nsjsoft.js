let msg = 'Hello';

function sayHello(name) {
  if(name) {
    msg += `, ${name}`;
  }

  console.log(msg);
}

sayHello('nsjsoft');