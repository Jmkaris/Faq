document.addEventListener('DOMContentLoaded', function() {
    const plusImg = document.querySelector(".quiz-one img"); 
    const plusImgTwo = document.querySelector(".quiz-two img");
    const plusImgThree = document.querySelector(".quiz-three img");
    const plusImgFour = document.querySelector(".quiz-four img");
   

    const quizone = document.querySelector(".quiz-one");
    const quiztwo = document.querySelector(".quiz-two");
    const quizthree = document.querySelector(".quiz-three");
    const quizfour = document.querySelector(".quiz-four"); 

    const para = document.querySelector(".question P");
    const par2 =document.getElementById("ptwo");
    const par3 = document.getElementById("pthree");


    quizone.addEventListener("click", () => {
        if (plusImg.src.includes("icon-plus.svg")) {
            plusImg.src = "assets/images/icon-minus.svg";
        } else {
            plusImg.src = "assets/images/icon-plus.svg";
        }
       if( para.style.display === "flex"){
             para.style.display = "none";
       }
       else{
        para.style.display = "flex";
       }
        });

        quiztwo.addEventListener("click", () => {
        if (plusImgTwo.src.includes("icon-plus.svg")) {
            plusImgTwo.src = "assets/images/icon-minus.svg";
        } else {
            plusImgTwo.src = "assets/images/icon-plus.svg";
        }
       if( par2.style.display === "flex"){
             par2.style.display = "none";
       }
       else{
        par2.style.display = "flex";
       }
        });

        quizthree.addEventListener("click", () => {
        if (plusImgThree.src.includes("icon-plus.svg")) {
            plusImgThree.src = "assets/images/icon-minus.svg";
        } else {
            plusImgThree.src = "assets/images/icon-plus.svg";
        }
       if( par3.style.display === "flex"){
             par3.style.display = "none";
       }
       else{
        par3.style.display = "flex";
       }
        });

        quizfour.addEventListener("click", () => {
        if (plusImgFour.src.includes("icon-plus.svg")) {
            plusImgFour.src = "assets/images/icon-minus.svg";
        } else {
            plusImgFour.src = "assets/images/icon-plus.svg";
        }
       if( par4.style.display === "flex"){
             par4.style.display = "none";
       }
       else{
        par4.style.display = "flex";
       }
        });
});
