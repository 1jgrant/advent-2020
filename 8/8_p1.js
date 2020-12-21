const loop = (input) => {
  const array = input.split("\n");
  const operations = [];
  array.forEach((item) => {
    const insObj = { op: "", val: 0, hit: false };
    insObj.op = item.slice(0, 3);
    insObj.val = Number(item.match(/[+-]\d+/g)[0]);
    operations.push(insObj);
  });
  let acc = 0;
  for (let i = 0; i < operations.length; ) {
    if (operations[i].hit) {
      return acc;
    }
    operations[i].hit = true;
    if (operations[i].op === "nop") {
      i++;
    } else if (operations[i].op === "acc") {
      acc += operations[i].val;
      i++;
    } else if (operations[i].op === "jmp") {
      i += operations[i].val;
    }
  }
};

module.exports = { loop };
