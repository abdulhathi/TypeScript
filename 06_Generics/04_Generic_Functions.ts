class ArrayUtils {
    wrapInArray<T>(num: T) {
        return [num];
    }
}

let arrayUtils = new ArrayUtils();
console.log(arrayUtils.wrapInArray(10));