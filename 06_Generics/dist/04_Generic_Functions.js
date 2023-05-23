class ArrayUtils {
    wrapInArray(num) {
        return [num];
    }
}
let arrayUtils = new ArrayUtils();
console.log(arrayUtils.wrapInArray(10));
