// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personsName = "shehzadi"
console.log(personsName.toLowerCase())
console.log(personsName.toUpperCase())
// console.log(personsName.charAt(0).toUpperCase + personsName.slice(1));
console.log("titlecase:", personsName.replace(/\b\w/g,c=> c.toUpperCase()))
