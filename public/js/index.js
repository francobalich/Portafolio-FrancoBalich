const   pagina = document.querySelector("body"),
        btnMenu = document.querySelector(".btnMenu"),
        menu = document.querySelector(".menu");

let state = false;
let msg=btnMenu.innerHTML;

btnMenu.innerHTML = btnMenu.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

btnMenu.addEventListener("click", () => {
    if (!state) {
        menu.style.top = "0vh";
        
        btnMenu.style.opacity="0";
        setTimeout(function() {
            btnMenu.innerHTML="Cerrar";
            
        btnMenu.style.opacity="1";
            state = true;
          }, 500);
    }
    else{;
        menu.style.top = "-100vh";
        btnMenu.style.opacity="0";
        setTimeout(function() {
            btnMenu.innerHTML=msg;
            btnMenu.style.opacity="1";
            state = false;
          }, 500);
        
    }
});
