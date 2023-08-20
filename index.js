
let malti=1*2*3*5*6
console.log(malti)

let r=1;
for(let i=1; i<=10; i++){
    r *= i
}
console.log(r)




// next
let date = new Date();
console.log(date);

let year = date.getFullYear();
let  month= date.getMonth();
let date1=date.getDate();
let hr = date.getHours();
let mints = date.getMinutes();
console.log("dates=",`${date1}/${month+1}/${year}`)
console.log("time=",`${hr}::${mints}`)





let day = date.getDay();
console.log(day)
let date2;
if(day===0){
    date2="sunday"
    console.log("sunday")
}
else if(day===1){
    date2="monday"
    console.log("monday")
}
else if(day===2){
    date2="Tuesday"
    console.log("Tuesday")
}
else if(day===3){
    date2="wednesday"
    console.log("wednesday")
}
else if(day===4){
    date2="Thruday"
    console.log("Thruday")
}
else if(day===5){
    date2="Friday"
    console.log("Friday")
}
else if(day===6){
    date2="satruday"
    console.log("satruday")
}



let monthss=date.getMonth();
console.log(monthss);
let monthr;
if (monthss===0){
    monthr="January"
    console.log("January")
}
else if(monthss===1){
    monthr="February"
    console.log("February")
}
else if(monthss===2){
    monthr="March"
    console.log("March")
}
else if(monthss===3){
    monthr="April"
    console.log("April")
}
else if(monthss===4){
    monthr="May"
    console.log("May")
}
else if(monthss===5){
    monthr="June"
    console.log("June")
}
else if(monthss===6){
    monthr="july"
    console.log("july")
}
else if(monthss===7){
    monthr="August"
    console.log("August")
}
else if(monthss===8){
    monthr="September"
    console.log("September")
}
else if(monthss===9){
    monthr="October"
    console.log("October")
}
else if(monthss===10){
    monthr="November"
    console.log("November")
}
else if(monthss===11){
    monthr="December"
    console.log("December")
}


console.log("dates=",`${date2}/${monthr}/${year}`)




