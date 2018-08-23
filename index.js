window.onload=function () {
    let banner = document.getElementsByClassName("banner")[0];
    let imgBox = banner.getElementsByClassName("imgBox")[0];
    let imgli = imgBox.getElementsByTagName("li");
     // console.log(banner, imgBox, imgli);
    let circleBtn = banner.getElementsByClassName("circleBtn")[0];
    let btnlist = circleBtn.getElementsByTagName("div");

    let leftBtn = document.getElementsByClassName("leftBtn")[0];
    let rightBtn = document.getElementsByClassName("rightBtn")[0];
    let now=next=0;
    // 自我移动
    let t=setInterval(move,2000);
    //move函数
    function move() {
        next++;
        if(next==imgli.length){
            next=0;
        }
        imgli[next].style.left="1226px";
        animate(imgli[now],{left:-1226});
        animate(imgli[next],{left:0});
        btnlist[now].className="";
        btnlist[next].className="change";
        now=next;
    }
    //移出移进
    banner.onmouseenter=function () {
        clearInterval(t);
    }
    banner.onmouseleave=function () {
        t=setInterval(move,2000);
    }
    // 向左移动函数
    function movel() {
        next--;
        if(next<0){
            next=imgli.length-1;
        }
        imgli[next].style.left="-1226px";
        animate(imgli[now],{left:1226});
        animate(imgli[next],{left:0});
        btnlist[now].className="";
        btnlist[next].className="change";
        now=next;
    }
    // 左右按钮点击调用函数使其滚动
    rightBtn.onclick=function () {
        move();
    }
    leftBtn.onclick=function () {
        movel();
    }
//  小圆点点击
    for (let i=0;i<btnlist.length;i++){
        btnlist[i].onclick=function () {
            if(now==i){
                return;
            }else if(now<i){
                imgli[i].style.left="1226px";
                animate(imgli[now],{left:-1226});
                animate(imgli[i],{left:0});
                btnlist[now].className="";
                btnlist[i].className="change";
            }else {
                imgli[i].style.left="-1226px";
                animate(imgli[now],{left:1226});
                animate(imgli[i],{left:0});
                btnlist[now].className="";
                btnlist[i].className="change";
            }
            next=now=i;
            // 必须在onclick函数里
        }

    }


}