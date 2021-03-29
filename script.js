var currentDay = $("#currentDay")
var nine = $("#nine > input")
var ten = $("#ten > input")
var eleven = $("#eleven > input")
var twelve = $("#twelve > input")
var one = $("#one > input")
var two = $("#two > input")
var three = $("#three > input")
var four = $("#four > input")
var five = $("#five > input")

var nineBtn = $("#nine > button")
var tenBtn = $("#ten > button")
var elevenBtn = $("#eleven > button")
var twelveBtn = $("#twelve > button")
var oneBtn = $("#one > button")
var twoBtn = $("#two > button")
var threeBtn = $("#three > button")
var fourBtn = $("#four > button")
var fiveBtn = $("#five > button")

// Time at the top
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');;
    currentDay.text(rightNow);
}
setInterval(displayTime, 1000);

// Local Storage
// Nine
function renderNine() {
    var lsNine = localStorage.getItem("lsNine")
    if (!lsNine) {
        return;
    }
    $("#nine-text").val(lsNine)
}
 
renderNine();

nineBtn.click(function(){
    var lsNine = $("#nine-text").val();
    localStorage.setItem("lsNine",lsNine)
    renderNine();
});
// Ten
function renderTen() {
    var lsTen = localStorage.getItem("lsTen")
    if (!lsTen) {
        return;
    }
    $("#ten-text").val(lsTen)
}
 
renderTen();

tenBtn.click(function(){
    var lsTen = $("#ten-text").val();
    localStorage.setItem("lsTen",lsTen)
    renderTen();
});
// Eleven
function renderEleven() {
    var lsEleven = localStorage.getItem("lsEleven")
    if (!lsEleven) {
        return;
    }
    $("#eleven-text").val(lsEleven)
}
 
renderEleven();

elevenBtn.click(function(){
    var lsEleven = $("#eleven-text").val();
    localStorage.setItem("lsEleven",lsEleven)
    renderEleven();
});
// Twelve
function renderTwelve() {
    var lsTwelve = localStorage.getItem("lsTwelve")
    if (!lsTwelve) {
        return;
    }
    $("#twelve-text").val(lsTwelve)
}
 
renderTwelve();

twelveBtn.click(function(){
    var lsTwelve = $("#twelve-text").val();
    localStorage.setItem("lsTwelve",lsTwelve)
    renderTwelve();
});
// one
function renderOne() {
    var lsOne = localStorage.getItem("lsOne")
    if (!lsOne) {
        return;
    }
    $("#one-text").val(lsOne)
}
 
renderOne();

oneBtn.click(function(){
    var lsOne = $("#one-text").val();
    localStorage.setItem("lsOne",lsOne)
    renderOne();
});
// Two
function renderTwo() {
    var lsTwo = localStorage.getItem("lsTwo")
    if (!lsTwo) {
        return;
    }
    $("#two-text").val(lsTwo)
}
 
renderTwo();

twoBtn.click(function(){
    var lsTwo = $("#two-text").val();
    localStorage.setItem("lsTwo",lsTwo)
    renderTwo();
});
// Three
function renderThree() {
    var lsThree = localStorage.getItem("lsThree")
    if (!lsThree) {
        return;
    }
    $("#three-text").val(lsThree)
}
 
renderThree();

threeBtn.click(function(){
    var lsThree = $("#three-text").val();
    localStorage.setItem("lsThree",lsThree)
    renderThree();
});
// Four
function renderFour() {
    var lsFour = localStorage.getItem("lsFour")
    if (!lsFour) {
        return;
    }
    $("#four-text").val(lsFour)
}
 
renderFour();

fourBtn.click(function(){
    var lsFour = $("#four-text").val();
    localStorage.setItem("lsFour",lsFour)
    renderFour();
});
// Five
function renderFive() {
    var lsFive = localStorage.getItem("lsFive")
    if (!lsFive) {
        return;
    }
    $("#five-text").val(lsFive)
}
 
renderFive();

fiveBtn.click(function(){
    var lsFive = $("#five-text").val();
    localStorage.setItem("lsFive",lsFive)
    renderFive();
});



// All of the functions to make the blocks respond dynamically
// Nine
if (moment().format("kk") == 9){
    nine.addClass("present")
} else if(moment().format("kk") <= 9){
    nine.addClass("future")
} else {
    nine.addClass("past")
}

// Ten
if (moment().format("kk") == 10){
    ten.addClass("present")
} else if(moment().format("kk") <= 10){
    ten.addClass("future")
} else {
    ten.addClass("past")
}

// Eleven
if (moment().format("kk") == 11){
    eleven.addClass("present")
} else if(moment().format("kk") <= 11){
    eleven.addClass("future")
} else {
    eleven.addClass("past")
}

// Twelve
if (moment().format("kk") == 12){
    twelve.addClass("present")
} else if(moment().format("kk") <= 12){
    twelve.addClass("future")
} else {
    twelve.addClass("past")
}

// One
if (moment().format("kk") == 13){
    one.addClass("present")
} else if(moment().format("kk") <= 13){
    one.addClass("future")
} else {
    one.addClass("past")
}

// Two
if (moment().format("kk") == 14){
    two.addClass("present")
} else if(moment().format("kk") <= 14){
    two.addClass("future")
} else {
    two.addClass("past")
}

// Three
if (moment().format("kk") == 15){
    three.addClass("present")
} else if(moment().format("kk") <= 15){
    three.addClass("future")
} else {
    three.addClass("past")
}

// Four
if (moment().format("kk") == 16){
    four.addClass("present")
} else if(moment().format("kk") <= 16){
    four.addClass("future")
} else {
    four.addClass("past")
}

// Five
if (moment().format("kk") == 17){
    five.addClass("present")
} else if(moment().format("kk") <= 17){
    five.addClass("future")
} else {
    five.addClass("past")
}