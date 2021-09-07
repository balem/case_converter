let array = [5, 1, 2, 3, 4, 5, 6, 7, 8, 9];
takeFirstN(array, 4);
array = [3, 7, 7, 7, 7, 7, 7, 7, 7];
takeFirstN(array, 3);

function takeFirstN(array, n) {
    return array.slice(0, -n);
}