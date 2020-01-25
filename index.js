//Adjusts navbar being hidden when scrolling down and visible when scrolling up
//Main Source: W3schools
var prevScrollpos = window.pageYOffset;

window.onload = () => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        console.log(prevScrollpos, currentScrollPos);
        let navbar = document.getElementById("navbar");
        if (prevScrollpos > currentScrollPos || prevScrollpos == 0){
            navbar.style.top = "87.5%";
        } else {
            navbar.style.top = "100%";
        }
        prevScrollpos = currentScrollPos;
    }
}