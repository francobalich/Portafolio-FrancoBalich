const   btnMenu = document.getElementById("btnMenu"),
        btnMenuCerrar = document.getElementById("btnMenuCerrar"),
        menu = document.getElementById("menu");

let state = true;

btnMenu.addEventListener("click", () => {
    if (state) {
        menu.style.left = "0px";
        btnMenu.style.top="-70px";
        state=false;
    }
});

btnMenuCerrar.addEventListener("click", () => {
    if (!state) {
        menu.style.left = "-100%";
        btnMenu.style.top="0px";
        state=true;
    }
});
