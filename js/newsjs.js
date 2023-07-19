
var h2_title = document.getElementById("h2_title");
var if_pre = document.getElementById("if_pre");
window.onload = function(){
    myAjax({
        type:'get',
        // url:'http://127.0.0.1:8080/bilinerz/data.php',
        url:'https://tv.kanzx.eu.org/data.php',
        data:{
            title: h2_title.innerText,
            info:0
        },
        success:function(data){
            console.log(data);
            document.getElementById('yd').innerText=data.yd;
            document.getElementById('zn').innerText="赞 " + data.zn;
        }
    });
    if (if_pre.innerText == "编程笔记"){
        prettyPrint();
    }
};

function solzn(){
    myAjax({
        type:'get',
        // url:'http://127.0.0.1:8080/bilinerz/data.php',
        url:'https://tv.kanzx.eu.org/data.php',
        data:{
            title: h2_title.innerText,
            info:1
        },
        success:function(data){
            console.log(data);
            document.getElementById('zn').innerText="赞 " + data.zn;
        }
    });
}