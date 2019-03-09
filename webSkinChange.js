var toWebRed   = document.getElementById("toRed");
var toWebGreen = document.getElementById("toGreen");
var toWebBlack = document.getElementById("toBlack");

//加载时页面自动执行
window.onload = toBeGreen;

function common(idobj,color){
    var td = document.getElementsByTagName("td");
    for(i = 0; i<td.length; i++){
        td[i].style.backgroundColor = color;
    } 
    idobj.style.backgroundColor = "white";
}

function toBeRed(){
    document.body.style.backgroundColor = "pink";
    common(toWebRed,"red");
    toWebGreen.style.backgroundColor = "green";
    toWebBlack.style.backgroundColor = "black";
}

function toBeGreen(){
    //获取body对象
    document.body.style.backgroundColor = "rgb(139, 189, 139)";
    common(toWebGreen,"green");
    toWebRed.style.backgroundColor = "red";
    toWebBlack.style.backgroundColor = "black";
}

function toBeBlack(){
    document.body.style.backgroundColor = "gray";
    common(toWebBlack,"black");
    toWebGreen.style.backgroundColor = "green";
    toWebRed.style.backgroundColor = "red";
}
