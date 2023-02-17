var _ = require('lodash/array');
console.log(_)


const duplicates = [2, 3, 4, 5, 6,5,6,2,7,7]
const blank = []


// console.log(_.uniq(duplicates));
function addToArray(array, number) {
    for (var i = -10; i < number; i++) {
        array.push(i)
    }
    // return array
    //unique array
    // return _.uniq(array)
    //max of the array
    // return _.max(array)
    //sum of the array
    // return _.sum(array)
    //mean of the array
    return _.mean(array)



}



// console.log(addToArray(duplicates, 25))
// console.log(addToArray(blank, 25))