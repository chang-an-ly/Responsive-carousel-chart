lbrimg()
function lbrimg() {
    /* ------------------------设置初始属性----------------------------- */
    let flag = true;
    let banner = document.getElementsByClassName('banner')[0]
    let oul = document.getElementsByClassName('banner')[0].getElementsByTagName('ul')[0]
    //a.在开始的位置添加原始的最后一张图片
    //b.在结束的位置添加上第一张图片

    /* 找到最开始的一张图片 */
    let first = oul.querySelector('li:first-of-type')
    /* 找到最后的一张图片 */
    let last = oul.querySelector('li:last-of-type')

    //在首尾插入2张图片 cloneNode() 是复制一个demo元素  appendChild是添加到元素最后
    //第一张添加到最后一张
    oul.appendChild(first.cloneNode(true));
    //insertBefore(需要插入dom元素,位置)  firstChild是最前面的位置
    //最后一张添加到第一张
    oul.insertBefore(last.cloneNode(true), oul.firstChild);

    /* 设置 ul 的宽度 */
    let lisy = oul.querySelectorAll("li").length
    oul.style.width = banner.offsetWidth * lisy + "px"

    /* 设置小圆点 */
    let oulT = document.getElementsByClassName('banner')[0].getElementsByTagName('ul')[1]
    let apery = []
    for (let i = 0; i < lisy - 2; i++) {
        apery[i] = document.createElement('li')
        oulT.appendChild(apery[i])
    }
    let firs = oulT.querySelector('li')
    firs.className = 'actv'


    /* ------------------------设置图片轮播----------------------------- */
    let timeID = null
    let index = 0
    let offsetbaner = banner.offsetWidth
    let olilength = oul.getElementsByTagName('li').length
    let moveimg = (dis) => {
        flag = false
        let time = 400  //每一次大轮播的时间
        let eachtime = 10   //切换一张图片的时间
        let easedih = dis / (time / eachtime) //每一秒需要轮播的距离
        let mbbjst = oul.offsetLeft + dis //目标距离
        let ecmove = () => {
            if (dis > 0 && oul.offsetLeft < mbbjst || dis < 0 && oul.offsetLeft > mbbjst) {
                oul.style.left = oul.offsetLeft + easedih + 'px'
            }
            else {
                clearInterval(timeID)
                oul.style.left = mbbjst + 'px'
                if (mbbjst == (olilength - 1) * -offsetbaner) {
                    oul.style.left = -offsetbaner + 'px'
                }
                if (mbbjst == 0) {
                    oul.style.left = (olilength - 2) * -offsetbaner + 'px'
                }
                flag = true
            }
        }
        timeID = setInterval(ecmove, eachtime);
    }

    /* ------------------------轮播图左右点击----------------------------- */
    let laste = document.getElementById('last')
    let next = document.getElementById('next')

    /* 向左点击 */
    laste.onclick = () => {
        if (flag) {
            moveimg(banner.offsetWidth)
            if (index == 0) {
                index = olilis.length - 1
            } else {
                index--
            }
            olistyle()
        }
    }

    /* 右点击 */
    next.onclick = () => {
        if (flag) {
            moveimg(-banner.offsetWidth)
            if (index == olilis.length - 1) {
                index = 0
            } else {
                index++
            }
            olistyle()
        }
    }


    /* ------------------------小圆点----------------------------- */
    let olilis = oulT.querySelectorAll('li')
    let olistyle = () => {
        document.getElementsByClassName("actv")[0].className = "";
        olilis[index].className = "actv";
    }
    for (let i = 0; i < olilis.length; i++) {
        olilis[i].onclick = () => {
            let num = (i - index) * -banner.offsetWidth
            index = i
            olistyle()
            moveimg(num)
        }
    }

    /* ------------------------自动轮播动画----------------------------- */
    let timeId2 = setInterval(next.onclick, 3000);
    banner.onmouseover = () => {
        clearInterval(timeId2)
    }
    banner.onmouseout = () => {
        timeId2 = setInterval(next.onclick, 3000);
    }

    /* ------------------------d监听屏幕发生改变li大小改变----------------------------- */
    // 设置li图片宽度
    let wsize = () => {
        for (let i = 0; i < lisy; i++) {
            olisy[i].style.width = oul.offsetWidth / lisy + 'px'
        }
    }

    let olisy = oul.querySelectorAll("li")
    wsize();
    /*  屏幕发生变化 */
    let lberWidth;
    window.onresize = () => {
        lberWidth = banner.offsetWidth;
        oul.style.width = lisy * lberWidth + 'px'
        for (let i = 0; i < lisy; i++) {
            olisy[i].style.width = lberWidth + 'px'
        }
        oul.style.left = -index * lberWidth + "px"
        
        offsetbaner = banner.offsetWidth;
    }

}