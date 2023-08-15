
function menu(canshu1,canshu2){
    var menu1 = document.getElementById(canshu1);
	var menu2 = document.getElementById(canshu2);
	
	menu1.onclick = function(){
        if (menu2.style.display == "none"){
            menu2.style.display = "block";
        }else{
            menu2.style.display = "none";
        }
	}
}
menu("menu1_1","menu1_2");
menu("menu2_1","menu2_2");
menu("menu3_1","menu3_2");