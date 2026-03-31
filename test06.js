function trouverMin(tab) {
    let min = tab[0]
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] < min) {
            min = tab[i];
        }
    }
    return min;
}

console.log(trouverMin([5, 2, 8, 1])); // 1
console.log(trouverMin([10, 20, -5])); // -5