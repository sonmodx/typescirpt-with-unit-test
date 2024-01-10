"use strict";
exports.__esModule = true;
exports.merge = void 0;
function merge(collection_1, collection_2) {
    var result = [];
    var i = 0;
    var j = 0;
    var k = 0;
    while (i < collection_1.length && j < collection_2.length) {
        if (collection_1[i] <= collection_2[j]) {
            result[k] = collection_1[i];
            i++;
        }
        else {
            result[k] = collection_2[j];
            j++;
        }
        k++;
    }
    // If there are remaining elements in collection_1, add them to the result
    while (i < collection_1.length) {
        result[k] = collection_1[i];
        i++;
        k++;
    }
    // If there are remaining elements in collection_2, add them to the result
    while (j < collection_2.length) {
        result[k] = collection_2[j];
        j++;
        k++;
    }
    return result;
}
exports.merge = merge;
var collection_1 = [1, 3, 5, 7, 9, 20, 21, 22];
var collection_2 = [2, 4, 6, 8, 20];
var result = merge(collection_1, collection_2);
console.log(result);
