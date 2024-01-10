export function merge(collection_1: number[],collection_2: number[]): number[] {
    const result:number[] = [];
    let i:number =0;
    let j:number =0;
    let k:number =0;
    
    while (i < collection_1.length && j < collection_2.length) {
        if (collection_1[i] <= collection_2[j]) {
            result[k] = collection_1[i];
            i++;
        } else {
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
const collection_1:number[] = [1,3,5,7,9,20,21,22];
const collection_2:number[] = [2,4,6,8,20];
const result:number[] = merge(collection_1, collection_2);
console.log(result);