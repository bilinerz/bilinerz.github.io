
var one_menu = document.getElementsByClassName("one_menu");
var two_menu = document.getElementsByClassName("two_menu");
one_menu[0].onclick = function (){
    if (two_menu[0].style.display == "none"){
        two_menu[0].style.display = "block";
    }else{
        two_menu[0].style.display = "none";
    }

}