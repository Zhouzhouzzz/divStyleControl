var div = document.getElementById("styleChange");

//第一种 CSS属性对应的style属性
function widerButton(){
    div.style.width = "200px";
    div.style.marginLeft = "-100px"
    //div.style.marginLeft = "100px";
    //console.log(div.style.marginLeft);
}

//第二种 setProperty()
function higherButton(){
    div.style.setProperty('height','200px');
}

/*第三种 cssText
function colorButton(){
    div.style.cssText = 'width:200px;height:200px;border:1px black solid;background-color:red';
}*/
function colorButton(){
    div.style.backgroundColor = "red";
}



//第一种 隐藏，隐藏后页面空白块
function hiddenButton(){
    div.style.visibility = "hidden";
    //div.style.visibility = "visible";   显示
}

/*第二种 隐藏，隐藏后释放空间
function hiddenButton(){
    div.style.display="none";  隐藏
    div.style.display="";  显示  
}*/

function recoverButton(){
    div.style.width = "100px";
    div.style.height= "100px";
    div.style.marginLeft= "-50px";
    div.style.border= "1px black solid";
    div.style.backgroundColor= "green";
    div.style.visibility = "visible";
}
