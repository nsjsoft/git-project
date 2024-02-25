function closure() {
  let cnt = 0;
  function cntPlus() {
    cnt = cnt + 1;
  }

  function setCnt(value) {
    cnt = value;
  }
  function printCnt() {
    console.log(cnt);
  }

  return { 
    cntPlus,
    printCnt,
    setCnt
  }
}

// cnt = 100;
// console.log(cnt);

const cntClosure = closure();

console.log(cntClosure);

cntClosure.cntPlus();

cntClosure.setCnt(100);

cntClosure.printCnt();

