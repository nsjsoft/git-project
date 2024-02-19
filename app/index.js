// const express = require("express");
// const router = express.Router();

// const ctrl = require("./home.ctrl");

// router.get("/", ctrl.output.home);

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = { name : "철수"};
    console.log('네트워크 요청 성공');
  }, 1000)
})

fetch("https://jsonplaceholder.typicode.com/users")
  .then((repsonse)=>{
    return repsonse.json();
  })
  .catch((error)=> {
    
  })
  .finally(()=> {

  })

