const toTop = document.querySelector(".to-top");
window.onscroll = ()=>{
    if(window.scrollY > 20){
        toTop.style.transform = "translate(0)"
    }else{
        toTop.style.transform = "translateY(200px)"
    }
};
toTop.addEventListener("click", ()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
});
window.onload = ()=>{
    console.clear()
}
// right menu
const mobileMenu = document.querySelector(".right-menu");
const mobileMenuClose = document.querySelector(".mobileMenuClose");
const rightMenu = document.querySelector(".mobile-menu");
mobileMenu.addEventListener("click", ()=>{
    rightMenu.style.width = "320px";
});
mobileMenuClose.addEventListener("click", ()=>{
    rightMenu.style.width = "0"
});
// left menu
const leftMenu = document.querySelector(".left-menu");
const leftMenuWindow = document.querySelector(".items");
const closeItemsWin = document.querySelector(".close-item-win");
leftMenu.addEventListener("click", ()=>{
    leftMenuWindow.style.left = "0";
});
closeItemsWin.addEventListener("click", ()=>{
    leftMenuWindow.style.left = "-100%";
})