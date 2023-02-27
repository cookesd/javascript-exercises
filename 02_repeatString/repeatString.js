const repeatString = function(in_str, num_times) {
    if (num_times < 0) {
        return("ERROR");
    } else {
        var text_arr = [];
        for (var ind = 0; ind < num_times; ind++) {
            text_arr.push(in_str);
        }
        return(text_arr.join(""));
    }
};

// Do not edit below this line
module.exports = repeatString;
