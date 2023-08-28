
//ELEMENT SEÇİMİ
let veri;

veri = document.getElementById("header");
//veri = document.getElementById("header").id;
//veri = document.getElementById("header").className;
//veri= veri.id;
//console.log(veri);

veri.style.color="blue";
veri.style.fontSize="50px";
veri.style.fontWeight="bold";

document.getElementById("header").innerText = "Yapılacaklar";
document.getElementById("header").innerHTML = "<b> Todo List <b>"

document.querySelector("li").style.color = "blue";
document.querySelector("li:last-child").style.color = "yellow";
document.querySelector("li:nth-child(2)").style.color = "red";
document.querySelector("li").className = "list-group-item list-group-item primary " ;

//ÇOĞUL ELEMENT SEÇİMİ  

const todoList = document.querySelector(".list-group");
veri = todoList;

const todo = document.querySelector(".list-group-item:nth-child(2)");
veri = todo ;

const card = document.querySelector(".card");
veri = card ;
console.log(veri);



/***********************************************DOM EVENTLERİ */

const btn = document.querySelector("#btnDeleteAll");
const btn2 = document.querySelector("#btnAddNewTask");
/*
btn.addEventListener("click" , function(){
    console.log("Butona tıklandı.")
});

YA DA ŞU ŞEKİLDE DE YAPILABİLİR.FONKSİYON DIŞARI DA TANIMLANABİLİR
*/

function btnClick(){
    console.log("Butona tıklandı.")
}
btn.addEventListener("click",btnClick);
btn2.addEventListener("click",btnClick); 

/***************************************** */

const ul = document.querySelector("ul");
ul.addEventListener("click", function(e){
    if(e.target.className === "fas fa-times"){
        e.target.parentElement.parentElement.remove();
    }
})
