// Part 1
var guestsList = ["Mehwish", "Rohan", "Ali"];
var canNotAttend = "Rohan";
var newGuest = "Zeeshan";
guestsList[guestsList.indexOf(canNotAttend)] = newGuest;
// guestsList.map((items) => console.log(` Dear ${items}, I found bigger table so I am inviting more peoples.`) );
// Part 2 Beginning
var guestBeg = "Faizan";
guestsList.unshift(guestBeg);
// console.log(guestsList)
// Part 3 Middle
var midGuest = "Mohsin";
var midIndex = guestsList.length / 3;
guestsList.splice(midIndex, 0, midGuest);
// console.log(guestsList)
// Part 4 Append
guestsList.push("Talha");
// console.log(guestsList)
// Part 5 
guestsList.map(function (items) { return console.log("Dear ".concat(items, ", You Are Invited In The More Guest List In My House For Dinner")); });
