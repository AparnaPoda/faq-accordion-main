for (let i = 0; i < document.querySelectorAll(".question").length; i++) {

    document.querySelectorAll(".question")[i].addEventListener("click",function() {
        document.querySelectorAll(".btn")[i].classList.toggle("hide");
        document.querySelectorAll("p")[i].classList.toggle("hide");
        document.querySelectorAll(".minus")[i].classList.toggle("hide");
    });
    
}