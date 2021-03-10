module.exports = function toReadable(number) {
    let upToTwenty = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let nToStr = number.toString();
    if (number === 0) {
        return "zero";
    }
    if (number < 20) {
        return upToTwenty[number];
    }
    if (nToStr.length === 2) {
        return (tens[nToStr[0]] + ' ' + upToTwenty[nToStr[1]]).trim();
    }
    if (nToStr.length === 3) {
        if (nToStr[1] === "0" && nToStr[2] === "0") {
            return upToTwenty[nToStr[0]] + ' hundred';
        } else
        return upToTwenty[nToStr[0]] +
                ' hundred ' +
                toReadable(+(nToStr[1] + nToStr[2]));
    }
};
