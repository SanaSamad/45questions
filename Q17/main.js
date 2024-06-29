// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and 
// you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite 
// only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a
//  name from your list, print a message to that person letting them know you’re sorry you can’t invite them to
//   dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
// actually have an empty list at the end of your program.
let guestList = ["Saba", "Habiba", "Anum", "Rani", "Hira"];
let notattending = guestList.splice(0, 1)[0];
guestList.push('Aizah');
guestList.unshift("Qudsia");
console.log(guestList);
guestList.splice(Math.floor(guestList.length / 2), 0, "Ali");
console.log(guestList);
guestList.push("Areeb");
console.log(guestList);
console.log("Unfortunately, the new dinner table couldn't arrive so we can invite two people only.");
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    if (removedGuest !== undefined) {
        console.log(`Sorry ${removedGuest}, we cant invite you.`);
    }
}
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are still invited for dinner`);
});
guestList.splice(0, guestList.length);
console.log(guestList);
export {};
