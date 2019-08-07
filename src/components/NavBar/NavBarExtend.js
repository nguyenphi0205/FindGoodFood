window.addEventListener("resize", function () {
    close_all_menu();
    document.getElementsByTagName("body")[0].classList.remove("display_menu");
});
var last_scroll = 0;
window.onscroll = function () {
    if (!document.getElementById("loader")) {
        close_all_menu();
        var header = document.getElementsByTagName("header")[0];
        if (Math.abs(last_scroll - this.scrollY) <= 5) return;
        this.scrollY < last_scroll
            ? (header.style.top = "0")
            : (header.style.top = "-" + header.clientHeight + "px");
        last_scroll = this.scrollY;
    }
};
function close_all_menu() {
    var lis = document.getElementById("menu").getElementsByTagName("li");
    Array.from(lis).forEach(function (e) {
        e.style.marginTop = 0;
    });
    var drop_menus = document.getElementsByClassName("drop_menu");
    Array.from(drop_menus).forEach(function (e) {
        e.classList.remove("display");
    });
}