function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

var palabras = ["a", "e", "i", "u", "o", "f", "v"];
console.log("Antes de ordenar:", palabras);
console.log("Después de ordenar:", bubbleSort(palabras));
