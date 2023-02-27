/* Should accept additional arguments to remove from array
    Since only list one, then the arguments array lists all args ordinally
*/
const removeFromArray = function(in_arr) {
    let out_arr = in_arr;
    for (let arg_ind = 1; arg_ind < arguments.length; arg_ind++) {
        let arg = arguments[arg_ind];
        let the_ind = out_arr.indexOf(arg);
        if (the_ind >= 0) {
            out_arr.splice(the_ind, 1);
        }
    }
    return(out_arr);
};

// Do not edit below this line
module.exports = removeFromArray;
