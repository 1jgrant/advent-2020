const bagRules = (input) => {
  const rulesArr = input.split(".\n");
  const rules = {};
  rulesArr.forEach((rule) => {
    const matchesArr = [...rule.matchAll(/(^\w+\s\w+)|\d\s(\w+\s\w+)/g)];
    rules[matchesArr[0][1]] = matchesArr.slice(1).map((match) => match[2]);
  });

  // const target = { "light red": rules["light red"] };
  // const target2 = rules["light red"];
  //const list = expand(target2, rules);

  //console.log(rules);
  const children = {};
  Object.keys(rules).forEach((rule) => {
    rules[rule].forEach((bag) => {
      if (!children[bag]) {
        children[bag] = [rule];
      } else if (children[bag]) {
        children[bag].push(rule);
      }
    });
  });
  //console.log("children>>", children);
  const target = children["shiny gold"];
  //console.log(target);
  const all = [];
  // const fill = () => {

  // }
  target.forEach((bag) => {
    if (!all.includes(bag)) all.push(bag);
    if (children[bag]) {
      children[bag].forEach((bag) => {
        if (!all.includes(bag)) all.push(bag);
        if (children[bag]) {
          children[bag].forEach((bag) => {
            if (!all.includes(bag)) all.push(bag);
            if (children[bag]) {
              children[bag].forEach((bag) => {
                if (!all.includes(bag)) all.push(bag);
                if (children[bag]) {
                  children[bag].forEach((bag) => {
                    if (!all.includes(bag)) all.push(bag);
                    if (children[bag]) {
                      children[bag].forEach((bag) => {
                        if (!all.includes(bag)) all.push(bag);
                        if (children[bag]) {
                          children[bag].forEach((bag) => {
                            if (!all.includes(bag)) all.push(bag);
                            if (children[bag]) {
                              children[bag].forEach((bag) => {
                                if (!all.includes(bag)) all.push(bag);
                                if (children[bag]) {
                                  children[bag].forEach((bag) => {
                                    if (!all.includes(bag)) all.push(bag);
                                    if (children[bag]) {
                                      children[bag].forEach((bag) => {
                                        if (!all.includes(bag)) all.push(bag);
                                        if (children[bag]) {
                                          children[bag].forEach((bag) => {
                                            if (!all.includes(bag))
                                              all.push(bag);
                                            if (children[bag]) {
                                              children[bag].forEach((bag) => {
                                                if (!all.includes(bag))
                                                  all.push(bag);
                                                if (children[bag]) {
                                                  children[bag].forEach(
                                                    (bag) => {
                                                      if (!all.includes(bag))
                                                        all.push(bag);
                                                      if (children[bag]) {
                                                        children[bag].forEach(
                                                          (bag) => {
                                                            if (
                                                              !all.includes(bag)
                                                            )
                                                              all.push(bag);
                                                            if (children[bag]) {
                                                            }
                                                          }
                                                        );
                                                      }
                                                    }
                                                  );
                                                }
                                              });
                                            }
                                          });
                                        }
                                      });
                                    }
                                  });
                                }
                              });
                            }
                          });
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
  //console.log("all>>", all);
  return all.length;
};

const expand = (target, reference) => {
  console.log(reference);
  console.log("target>>", target);
  for (let i = 0; i < target.length; i++) {
    expand(reference[target[i]], reference);
  }
};

// const bagRules = (input) => {
//   const rulesArr = input.split(".\n");
//   //console.log(rulesArr);
//   const rules = {};
//   const sep = rulesArr[0].split(/ contain /g);
//   rulesArr.forEach((rule) => {
//     const separated = rule.split(/ bags contain /);
//     const subRegex = /(?:\d\s)(\w+\s\w+)/g;
//     const subList = [...separated[1].matchAll(subRegex)].map((item) => item[1]);
//     rules[separated[0]] = subList;
//   });
//   //console.log(rules);
//   Object.keys(rules).forEach((outerBag) => {
//     rules[outerBag].forEach((innerBag) => {
//       //console.log(innerBag);
//       rules[outerBag].push(rules[innerBag]);
//     });
//     const flattened = flatten(rules[outerBag]);
//     rules[outerBag] = flattened;
//   });
//   console.log(rules);
//   let count = 0;
//   Object.keys(rules).forEach((outerBag) => {
//     if (rules[outerBag].includes("shiny gold")) count++;
//   });

//   return count;
// };
// //(\w+\s\w+) (?:bags contain) (no other bags)*(?:\d (\w+\s\w+))*
// function flatten(ary) {
//   var ret = [];
//   for (var i = 0; i < ary.length; i++) {
//     if (Array.isArray(ary[i])) {
//       ret = ret.concat(flatten(ary[i]));
//     } else {
//       ret.push(ary[i]);
//     }
//   }
//   return ret;
// }

module.exports = { bagRules, expand };
