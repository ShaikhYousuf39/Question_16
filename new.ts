// Part 1

let guestsList: string[] = ["Mehwish","Rohan","Ali"];
let canNotAttend : string = "Rohan";

let newGuest = "Zeeshan";

guestsList [guestsList.indexOf(canNotAttend)] = newGuest;

// guestsList.map((items) => console.log(` Dear ${items}, I found bigger table so I am inviting more peoples.`) );

// Part 2 Beginning
let guestBeg: string = "Faizan"
guestsList.unshift(guestBeg)
// console.log(guestsList)

// Part 3 Middle
let midGuest:string = "Mohsin"
let midIndex = guestsList.length/3
guestsList.splice(midIndex,0,midGuest)
// console.log(guestsList)

// Part 4 Append

guestsList.push("Talha")
// console.log(guestsList)

// Part 5 

guestsList.map((items)=> console.log(`Dear ${items}, You Are Invited In The More Guest List In My House For Dinner`));