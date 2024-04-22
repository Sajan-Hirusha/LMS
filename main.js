function openNav() {
    document.getElementById("navigation").style.width = "210px";
}

function closeNav() {
    document.getElementById("navigation").style.width = "0";
}



let width = screen.width;  
console.log(width);         
let select1 = document.getElementById('sType');
select1.addEventListener('change', function () {
    loadForm(select1.value);
});



function loadForm(selectValue) {
        if (selectValue === "onlineStudentsLogin") {

            document.getElementById('display1').style.display = "initial";
            document.getElementById('display2').style.display = "none";
            document.getElementById('display3').style.display = "none";
        }
        else if (selectValue === "onlineStudentsRegister") {

            document.getElementById('display2').style.display = "initial";
            document.getElementById('display1').style.display = "none";
            document.getElementById('display3').style.display = "none";
        }
        else if (selectValue === "internalStudents") {
            document.getElementById('display3').style.display = "initial";
            document.getElementById('display1').style.display = "none";
            document.getElementById('display2').style.display = "none";
        } else {
            document.getElementById('display2').style.display = "none";
            document.getElementById('display1').style.display = "none";
            document.getElementById('display3').style.display = "none";
        }
}



var form1 = document.getElementById("formDiv1");
var form2 = document.getElementById("formDiv2");
var form3 = document.getElementById("formDiv3");

var next1 = document.getElementById("next1");
var next2 = document.getElementById("next2");
var back1 = document.getElementById("back1");
var back2 = document.getElementById("back2");

var progress = document.getElementById("progress");


next1.onclick = function () {
    if (width > 1230) {
        form1.style.left = "-450px";
        form2.style.left = "17px";
        progress.style.width = "240px";
    } else if (width > 920 && width <= 1230) {
        form1.style.left = "-450px";
        form2.style.left = "7px";
        progress.style.width = "200px";
    } else if(width>760 && width <= 920){
        form1.style.left = "-450px";
        form2.style.left = "7px";
        progress.style.width = "160px";
    }

}
back1.onclick = function () {
    if (width > 1230) {
        form1.style.left = "17px";
        form2.style.left = "450px";
        progress.style.width = "120px";
    } else if (width > 920 && width <= 1230) {
        form1.style.left = "7px";
        form2.style.left = "450px";
        progress.style.width = "100px";
    } else if(width>760 && width <= 920){
        form1.style.left = "7px";
        form2.style.left = "450px";
        progress.style.width = "80px";
    }

}

next2.onclick = function () {
    if (width > 1230) {
        form2.style.left = "-450px";
        form3.style.left = "17px";
        progress.style.width = "360px";
    } else if (width > 920 && width <= 1230){
        form2.style.left = "-450px";
        form3.style.left = "7px";
        progress.style.width = "300px";
    } else if(width>760 && width <= 920){
        form2.style.left = "-450px";
        form3.style.left = "7px";
        progress.style.width = "240px";
    }
}

back2.onclick = function () {
    if (width > 1230) {
        form2.style.left = "17px";
        form3.style.left = "450px";
        progress.style.width = "240px";
    } else if (width > 920 && width <= 1230){
        form2.style.left = "7px";
        form3.style.left = "450px";
        progress.style.width = "200px";
    } else if(width>760 && width <= 920){
        form2.style.left = "7px";
        form3.style.left = "450px";
        progress.style.width = "160px";
    }
}



