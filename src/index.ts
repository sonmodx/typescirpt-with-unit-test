export function merge(collection_1: number[],collection_2: number[]): number[] {
    const result:number[] = [];
    let i =0;
    let j =0;
    let k =0;
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
const collection_1:number[] = [1,2,3,4,5];
const collection_2:number[] = [1,2,3,4,5];
const result = merge(collection_1, collection_2);
console.log(result);