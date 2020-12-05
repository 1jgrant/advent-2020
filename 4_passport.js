const passCheck = (batch) => {
  //console.log(batch);
  const batchRegex = /(.+\n)+/gm;
  const entries = batch.match(batchRegex);
  //console.log(entries);
  const re = /\n/g;
  const format = entries.map((entry) => entry.replace(re, " "));
  //console.log("format>>>", format);
  let valid = 0;
  format.forEach((passport) => {
    const passObj = createObj(passport);
    //console.log(passObj);
    if (
      passObj.ecl &&
      passObj.pid &&
      passObj.eyr &&
      passObj.hcl &&
      passObj.byr &&
      passObj.iyr &&
      passObj.hgt
    ) {
      if (validate(passObj)) {
        valid++;
      }
    }
  });

  return valid;
};

const validate = (passObj) => {
  //console.log(passObj);
  const { byr, iyr, eyr, hgt, hcl, ecl, pid } = passObj;
  const byrVal = Number(byr) > 1919 && Number(byr) < 2003;
  const iyrVal = Number(iyr) > 2009 && Number(iyr) < 2021;
  const eyrVal = Number(eyr) > 2019 && Number(eyr) < 2031;
  const pidVal = /^\d{9}$/.test(pid);
  const hclVal = /#[0-9a-f]{6}/.test(hcl);
  const eclVal = /^(amb|blu|brn|gry|grn|hzl|oth)$/.test(ecl);
  const hgtVal = (hgt) => {
    const num = Number(hgt.match(/\d+/g));
    //console.log(num);
    if (hgt.endsWith("cm")) {
      return num > 149 && num < 194;
    }
    if (hgt.endsWith("in")) {
      return num > 58 && num < 77;
    }
  };

  const results = [byrVal, iyrVal, eyrVal, hgtVal(hgt), hclVal, eclVal, pidVal];
  return results.every((result) => result);
};

const createObj = (passString) => {
  const passObj = {};
  const replacer = (match, p1, p2) => {
    passObj[p1] = p2;
  };
  const pairsRe = /(?:([a-zA-Z0-9]+):([a-zA-Z0-9#]+))/g;
  const pairs = passString.match(pairsRe);
  pairs.forEach((pair) => {
    pair.replace(pairsRe, replacer);
  });
  //console.log(passObj);
  return passObj;
};

module.exports = { passCheck };
