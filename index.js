window.onload=function(){
    var btns=document.getElementsByTagName('input');
    var divs=document.getElementsByClassName('div');
    var arr=[];
    var arr2=[];
    var timer=0;
    var onOff=true;
    //按钮1点击
    btns[0].onclick=function(){
        if(onOff){
            onOff=false;
            clearInterval(timer);
            timer=setInterval(function(){
                play();
            },1000)
            play();
        }
    }
    //按钮2点击
    btns[1].onclick=function(){
        for (var i = 0; i < divs.length; i++) {
            divs[i].style.background="#ffa600";
        }
        clearInterval(timer);
        onOff=true;
    }
    function play(){
        arr.length=0;
        //获取3个格
        for (var i = 0; i < divs.length; i++) {
            divs[i].style.background="#ffa600";
            arr.push(divs[i]);
        }
        arr.sort(function(a,b){
            return Math.random()-0.5;
        })
        arr.length=3;
        //获取颜色
        getColor();
        for (var i = 0; i < arr.length; i++) {
            arr[i].style.background=arr2[i];
        }
    }
    //随机获取三个颜色
    function getColor(){
        arr2.length=0;
        var col=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
        var color1="#",
        color2="#",
        color3="#";
        for (var i = 0; i < 6; i++) {
            color1+=col[Math.floor(Math.random()*16)];
            color2+=col[Math.floor(Math.random()*16)];
            color3+=col[Math.floor(Math.random()*16)];
        }
        arr2.push(color1,color2,color3);
    }
}
