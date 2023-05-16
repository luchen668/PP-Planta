let Text_btn = document.getElementById("Text_btn");
let text = document.getElementById("text");

Text_btn.addEventListener("click", cambiarStyle);

function cambiarStyle(){
    text.classList.toggle("mostrar");
    if(text.classList.contains("mostrar")){
        Text_btn.innerHTML = "mostrar menos";
    } else{
        Text_btn.innerHTML = "mostrar mas";
    }
}