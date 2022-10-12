"use strict";

[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]



































// var gIsMark = false;

// var elModal = document.querySelector(".modal")

// function init() {
//   // TODO: change the h1 txt VV
//   var elH1txt = document.querySelector("h1");
//   setTimeout(() => {
//     elH1txt.innerText = "i love JS";
//   }, 3000);
// }
// // var elBtn = document.querySelector("button");


// function mark(elBtn) {
// var elSpans = document.querySelectorAll(".box span");
//   if (!gIsMark) {
//     elBtn.innerText = "unmarked"
//     for(var i = 0 ; i<elSpans.length;i++){
//         elSpans[i].classList.toggle('mark')
//         // console.log(elSpans[i].className);
        
//     }return 
//     }
//    console.log('haha');
//     elBtn.innerText = "Mark" 
//     }
//   // TODO: change text in the button
//   // TODO: mark all spans inside .box


// function whenMouseOnImg(elImg) {
//   // TODO: change the imageVV
//   elImg.src = "img/ca.png"
// }

// function whenMouseOutImg(elImg) {
//     setTimeout(() => {
//         elImg.src = "img/ninja.png"
//       }, 5000)
//   // TODO: change the imageVV
// }

// function changeSubHeader(elSpan) {
//   // if(!gIsMark)return - לחזור לדאוג שזה יפעל
//     var elH2txt = document.querySelector("h2 span")
//     elH2txt.innerText=elSpan.innerText

//   // elSpan.classlist
//   // TODO: change the text in the span inside the h2 vv
// }

// function handleKey(ev) {
//   // TODO: close the modal if escape is pressed
//   console.log("ev:", ev);
//   if(ev.code==='Escape') closeModal()
// }

// function openModal() {
//     var elModal = document.querySelector(".modal")
//     elModal.style.display = "block"
//   // Todo: show the modal and schedule its closing
// }
// function closeModal() {
//     elModal.style.display = "none"
    

//   // Todo: hide the modal
// }

// function bless() {
//   var modal = document.querySelector(".modal h2")
//   modal.innerText= "You are blessed at "+getTime()
//     modal.style.color= getRandomColor()
//     openModal()
//   setTimeout(() => {
//     elModal.style.display = "none";
//   }, 5000)

//    // Todo: update the modal content and use openModal
// }

// function getTime() {
//   return new Date().toString().split(" ")[4];
// }

// function getRandomColor() {
//   var letters = "0123456789ABCDEF";
//   var color = "#";
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }


// function imgClicked(){
//     var elModal = document.querySelector(".modal")
//     elModal.style.display = "inline-block"
// }