"use strict";
exports.__esModule = true;
exports.merge = void 0;
function merge(collection_1, collection_2) {
    var result = [];
    var i = 0;
    var j = 0;
    var k = 0;
    while (i < collection_1.length || j < collection_2.length) {
        if (collection_1[i] <= collection_2[j]) {
            result.push(collection_1[i]);
            i++;
        }
        else {
            result.push(collection_2[j]);
            j++;
        }
        k++;
    }
    return result;
}
exports.merge = merge;
var collection_1 = [1, 2, 3, 4, 5];
var collection_2 = [1, 2, 3, 4, 5];
var result = merge(collection_1, collection_2);
console.log(result);
