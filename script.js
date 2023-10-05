function scrollTopfunc() {
    document.querySelector("#myBtn").addEventListener("click", function () {
        window.scrollTo(0, 0)
    })
}

scrollTopfunc()

function openSideMenu(){
    document.querySelector(".responsive-navbar .menu").addEventListener("click", function () {
        document.querySelector(".side-menu").style.transform = "translateX(0)";
        document.querySelector(".side-menu").style.opacity = 1;

    })
}

openSideMenu()

function closeSideMenu(){
    document.querySelector(".side-menu .close").addEventListener("click", function () {
        document.querySelector(".side-menu").style.transform = "translateX(100%)";
        document.querySelector(".side-menu").style.opacity = 0;

    })
}

closeSideMenu()

