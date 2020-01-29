//Adjusts navbar being hidden when scrolling down and visible when scrolling up
//Main Source: W3schools

window.onload = () => {  

//Smooth Scrolling JQuery
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById("navbar").style.top = "-110px";
        document.getElementById("myself").style.marginTop = "0";
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//In Case users want to return the navbar without scrolling up
document.addEventListener('keydown', logKey);
    function logKey(e){
        document.getElementById("navbar").style.top = "0";
        document.getElementById("myself").style.marginTop = null;
    }

}