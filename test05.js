function filtrerMajeurs(personnes) {
    let newtab = [];
    for (let i = 0; i < personnes.length; i++) {
        if (personnes[i].age >= 18) {
            newtab.push(personnes[i])
        }
    }
    return newtab;
}

console.log(filtrerMajeurs([
    { nom: "Alice", age: 17 },
    { nom: "Bob", age: 20 }
])); // [{ nom: "Bob", age: 20 }]