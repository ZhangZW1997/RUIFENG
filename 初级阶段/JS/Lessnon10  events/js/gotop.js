(function () {
    var goBtn = document.querySelector(".gobtn");
    /*var offset = 0;     //偏移量
    //监听窗口滚动
    window.onscroll = function () {
        //兼容IE
        offset = document.body.scrollTop || document.documentElement.scrollTop;
    }
    goBtn.onclick = function () {
        var duration = 1000;    //持续时间
        var interval = 15;      //每一帧持续时间
        var frames = duration / interval;            //帧数
        var speed = Math.ceil(offset / frames);      //每一帧位移的距离
        var t = setInterval(function () {
            if(offset > 0){
                document.body.scrollTop = document.documentElement.scrollTop = offset - speed;
            }
            else {
                //    清除定时器
                clearInterval(t);
                //    更新当前位置
                document.body.scrollTop = document.documentElement.scrollTop = 0;
            }
        }, interval)
    }*/


    goTop(goBtn, 1000, 15);
})()