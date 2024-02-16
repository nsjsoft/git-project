// function increaseAndPrint(n, callback) {
//   setTimeout(() => {
//     const increased = n + 1;
//     console.log(increased);
//     if(callback) {
//       callback(increased);
//     }
//   }, 1000);
// }

// increaseAndPrint(0, n => {  
//   increaseAndPrint(n, n => {
    
//   })
// });

/* function increaseAndPrint(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const increased = n + 1;
      console.log(increased);
      resolve(increased);
    }, 1000)
  })
}

increaseAndPrint(0)
  .then((n) => increaseAndPrint(n));

const myPromise = new Promise((resolve, reject) => {
  const data = fetch('https://jsonplaceholder.typicode.com/todos/1');

  if(data)
    resolve(data);
  else
    reject("Error");
});

myPromise
  .then((value) => {
    console.log("Data: ", value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally end');
  })

 */

console.log('===========================================');
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response)=>response.json())
  .then((data)=>console.log(data));


function doSomething() {
  return new Promise((resolve, reject) => {
    resolve(100)
  })
}

doSomething()
  .then((value1) => {
    const data1 = value1 + 50;
    return data1
  })
  .then((value2) => {
    const data2 = value2 + 50;
    return data2;
  })
  .then((value3) => {
    console.log(value3)
  })


// try {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

//   if(response.ok) {
//     const users = await reponse.json();
//     const logins = users.map((user) => user.login);
//     const result = logins.join(", ");
//     console.log(result);
//   } else {
//     throw new Error("Network Error");
//   }
// } catch(error) {
//   console.error(error)
// }

// function getData(callback) {
//   callback
// }
//.then((n) => increaseAndPrint(n));

//increaseAndPrint(0, n => {
//  increaseAndPrint(n, n => {
//    increaseAndPrint(n, n => {
//      increaseAndPrint(n, n => {
//        increaseAndPrint(n, n => {
//          console.log('끝!');
//        });
//      });
//    });
//  });
//});

const fs = require('fs');
//const data1 = fs.readFileSync('file1.txt', 'utf8');

const one = () => Promise.resolve('One!');

async function myFunc() {
  console.log('In function!');
  const res = await one();
  console.log(res);
}

console.log('Before Function!')
myFunc();
console.log('After Function!');

// 프로미스 객체 반환 함수
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`${ms} 밀리초가 지났습니다.`);
      resolve()
    }, ms);
  });
}

// 기존 Promise.then() 형식
function main() {
  delay(1000)
      .then(() => {
        return delay(2000);
      })
      .then(() => {
        return Promise.resolve('끝');
      })
      .then(result => {
        console.log(result);
      });
}

// 메인 함수 호출
main();

const BMW = function(color) {
  const c = color;
  this.getColor = function() {
    console.log(c);
  }
}

const x5 = new BMW("red");
console.log(x5.c);

