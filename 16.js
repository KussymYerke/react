/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {

    let arra = [], i = 0

    while(i < arr.length){
        arra.push(arr.slice(i, i + size))

        i += size
    }

    return arra
};
