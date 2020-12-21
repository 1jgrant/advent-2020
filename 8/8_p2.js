const loopP2 = (input) => {
  const array = input.split("\n");
  console.log(array.length);
  const operations = [];
  array.forEach((item) => {
    const insObj = { op: "", val: 0, hit: false };
    insObj.op = item.slice(0, 3);
    insObj.val = Number(item.match(/[+-]\d+/g)[0]);
    operations.push(insObj);
  });
  let acc = 0;
  console.log(operations);

  for (let i = 0; i < operations.length; i++) {
    if (operations[i].op === "nop" || operations[i].op === "jmp") {
      const opsCopy = operations.map((operation, index) => {
        if (index === i) {
          const replacement = operation.op === "nop" ? "jmp" : "nop";
          return { ...operation, op: replacement };
        } else {
          return { ...operation };
        }
      });
      console.log(i, opsCopy);
      // for (let j = 0; j < opsCopy.length; ) {
      //   console.log(j);
      //   if (operations[j].op === "nop") {
      //     j++;
      //   } else if (operations[j].op === "acc") {
      //     acc += operations[j].val;
      //     j++;
      //   } else if (operations[j].op === "jmp") {
      //     j += operations[j].val;
      //   }
      //   if (j > 500) {
      //     break;
      //   }
      //   if (j === opsCopy.length) {
      //     return acc;
      //   }
      // }
    }
  }

  // for (let i = 0; i < operations.length; ) {
  //   if (operations[i].hit) {
  //     return acc;
  //   }
  //   operations[i].hit = true;
  //   if (operations[i].op === "nop") {
  //     i++;
  //   } else if (operations[i].op === "acc") {
  //     acc += operations[i].val;
  //     i++;
  //   } else if (operations[i].op === "jmp") {
  //     i += operations[i].val;
  //   }
  // }
};

module.exports = { loopP2 };
