async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  const response2 = await fetch(`https://jsonplaceholder.typicode.com/todos/${data.id}`);
  const data2 = await response2.json();
  console.log(data2);
}

getData();

//const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');

const pr = new Promise((resolve, reject) => {
  setTimeout(()=> {
    resolve("OK")
  })
});

pr.then((result) => {
  console.log(result)
})
  .finally(() => {
    console.log('finally')
  }
)

const array = [];
const object = {};