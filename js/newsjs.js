
var h2_title = document.getElementById("h2_title");
window.onload = function(){
    prettyPrint()
    myAjax({
        type:'get',
        // url:'http://127.0.0.1:8080/bilinerz-data/data.php',
        url:'https://tv.kanzx.ga/bilinerz-data/data.php',
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
};

function solzn(){
    myAjax({
        type:'get',
        // url:'http://127.0.0.1:8080/bilinerz-data/data.php',
        url:'https://tv.kanzx.ga/bilinerz-data/data.php',
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