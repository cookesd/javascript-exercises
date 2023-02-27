const reverseString = function(front_str) {
    let str_arr = front_str.split("");
    let rev_str = "";
    for (let char_ind = 0; char_ind < str_arr.length; char_ind++) {
        rev_str += str_arr[str_arr.length - char_ind - 1];
    }
    return(rev_str)
};

// Do not edit below this line
module.exports = reverseString;
