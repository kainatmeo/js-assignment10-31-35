_____________________________________________ Question 1____________________________________________
// var today = new Date()
// document.write(today.toString())

// _____________________________________________ Question 2____________________________________________

// var current=  new Date()
// var currentMonth=current.getMonth();
// var monthNames = ["January", "February", "March", "April", "May", "June", 
//     "July", "August", "September", "October", "November", "December"];
//      var currentMonthName = monthNames[currentMonth];
//      console.log(`The current month is ${currentMonthName}.`);
//      alert(`The current month is ${currentMonthName}.`);

// _____________________________________________ Question 3____________________________________________
//  var currentDate = new Date();
//  var dayIndex=currentDate.getDay();
//  var days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//  var currentDayName = days[dayIndex];
// //  var shortDayName = currentDayName.substring(0, 3);
//  alert(`The first 3 letters of today are ${currentDayName}.`);
// // _____________________________________________ Question 4____________________________________________


// var currentDate = new Date();
// var  currentDayIndex = currentDate.getDay();
// if (currentDayIndex === 0 || currentDayIndex === 6) {
//     alert("It's Fun day!");
// } else {alert("It's not Fun day today.");
// }
// _____________________________________________ Question 5____________________________________________
// var currentDate = new Date();
// var  currentDay = currentDate.getDate();
// if (currentDay < 16) {
//     alert("First fifteen days of the month");
// } else {    alert("Last days of the month");
// }

// _____________________________________________ Question 6____________________________________________
// var currentDate = new Date();
// var millisecondsSinceEpoch = currentDate.getTime();
// var  minutesSinceEpoch = Math.floor(millisecondsSinceEpoch / 1000 / 60);
// console.log("Minutes since midnight, Jan. 1, 1970:", minutesSinceEpoch);


// _____________________________________________ Question 7____________________________________________
// var minutesSinceEpoch = new Date().getTime() / (1000 * 60);
// console.log(`Minutes since midnight, Jan. 1, 1970: ${minutesSinceEpoch}`);

// _____________________________________________ Question 8____________________________________________
// var laterDate = new Date(2020, 11, 31);
// console.log(laterDate);

// _____________________________________________ Question 9____________________________________________
//  var ramadanStart = new Date(2015, 5, 18);
//  var  currentDate = new Date();
//  var  timeDifference = currentDate - ramadanStart;
//  var  daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//  alert(`Number of days past since 1st Ramadan (June 18, 2015): ${daysDifference}`);

