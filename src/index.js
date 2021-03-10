module.exports = function toReadable(number) {
    let n = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    let str = number.toString();
    if (number === 0) {
        return "zero";
    }
    if (number <= 20) {
        return n[[str[0]] + [str[1]]];
    }
    if (str.length === 2) {
        if (str[1] === "0") {
            return n[str[0] * 10];
        } else {
            return n[str[0] * 10] + " " + n[str[1]];
        }
    }
    if (number % 100 === 0) {
        return n[str[0]] + " hundred";
    }
    if (str.length === 3) {
        if (str[1] === "0") {
            return n[str[0]] + " hundred " + n[str[2]];
        } else if (str[2] === "0") {
            return n[str[0]] + " hundred " + n[str[1] * 10];
        } else {
            return n[str[0]] + " hundred " + toReadable(str[1] + str[2]);
        }
    }
};
