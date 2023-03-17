
// 获取当前时间
function get_day(){
    var t = new Date,    //获取当前shij
        year = t.getFullYear(),  //获取当前时间的年份
        month = t.getMonth(),    //获取当前时间的月份
        day = t.getDate(),   //获取当前时间的日
        week = t.getDay(),   //获取当前时间星期
        weekArr = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"),
        showTime = "当前时间：" + year + "年" + month + "月" + day + "日" + " " + weekArr[week],
        times = document.getElementById("times");
    times.innerHTML = showTime;
}



// 随机摘要缩略图
function zy_img(){
	var sl_img = document.getElementsByClassName("sl_img");

    for (var i = 0; i <= sl_img.length; i++) {
        var random_img = Math.floor(Math.random() * 39);
        sl_img[i].src = "./img/imgzy/" + random_img + ".jpg";
    }
}

window.onload = function (){
    get_day();
    zy_img();
}



//显示的轮播图片下标
let index = 0;

//自动滚动
function createAuto() {
    return setInterval(() => {
        index++
        refresh()
    }, 3500);
}

let autoTimer = createAuto();

function refresh(){
    //设置下标的范围
    if (index <0){
        //下标小于0时，设置最右的图片
        index = 4;
    } else if (index > 4){
        //下标超过上限时，设置最左的图片
        index = 0;
    }

    //获取轮播框元素
    let row_1 = document.querySelector('#row_1');

    //获取轮播框的宽度
    let row_1_width = getComputedStyle(row_1).width;
    row_1_width = Number(row_1_width.slice(0, -2));

    row_1.querySelector(".inner").style.left = index * row_1_width * -1 + "px";
}
refresh();

function leftShift(){
    index--;
    refresh();
}
function rightShift(){
    index++;
    refresh();
}

function setIndex(idx){
    index = idx;
    refresh();
}
