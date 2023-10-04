let string = "";
let btn = document.querySelectorAll(".btns");
Array.from(btn).forEach((btns)=>{
    btns.addEventListener("click", (e)=>{
        if(e.target.innerHTML == "="){
           string = eval(string);
           document.querySelector(".screen").value = string;
        }
        else if(e.target.innerHTML == "AC"){
            string = "";
            document.querySelector(".screen").value = string;
        }
        else{
            string = string + e.target.innerHTML;
            document.querySelector(".screen").value = string;
        }
    })
})