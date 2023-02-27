const sumAll = function(num1, num2) {
    let low_num = num1 < num2 ? num1 : num2;
    let high_num = num1 < num2 ? num2 : num1;
    if (low_num < 0) {
        return("ERROR");
    }
    if (typeof(num1) != "number" | typeof(num2) != "number") {
        return("ERROR");
    }
    let the_sum = 0;
    for (let curr_num = low_num; curr_num <= high_num; curr_num++) {
        the_sum += curr_num;
    }
    return(the_sum);
};

// Do not edit below this line
module.exports = sumAll;
