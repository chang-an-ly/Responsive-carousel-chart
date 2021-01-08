### 这是一个原生js封装的一个轮播图插件
      优点: 原生js轮播图 浏览器 (IE,谷歌,火狐) 基本都支持
            js轮播不出现卡顿与图片跳转混乱
            需要几张图片即插入几张图片 已用原生 js 实现动态首尾插入图片
            需要修改轮播图框大小随心随即可改

      修改轮播图框大小 只需要直接用style修改即可
        html代码: 
          <div class="banner" style="width: 1200px;"> 

######  使用方法
  使用 bundle-min.js 这个js文件  (推荐使用 js代码已压缩)  dist文件内便是压缩的实例
    html代码: 
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>轮播图封装</title>
        </head>
        <body>
            <div class="banner">
                <ul>
                    <li>
                        <a href="#"><img src="./imges/1.jpg" alt=""></a> 
                    </li>
                    <li>
                        <a href="#"><img src="./imges/2.jpg" alt=""></a> 
                    </li>
                    <li>
                        <a href="#"><img src="./imges/3.jpg" alt=""></a> 
                    </li>
                </ul>
                <ul></ul>
                <a id="last" class="aut" href="javascript:;"><</a>
                <a id="next" class="aut" href="javascript:;">></a>
            </div>
        </body>
        <script src="js/bundle-min.js"></script>
        </html>
      css代码: 打包压缩在 bundle-min.js 文件里面

  使用 bundle.js 这个js文件  (js代码未压缩)  src文件内便是未压缩的实例
      html代码: 
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="css/demo.css">
            <title>轮播图封装</title>
        </head>
        <body>
            <div class="banner">
                <ul>
                    <li>
                        <a href="#"><img src="./imges/1.jpg" alt=""></a> 
                    </li>
                    <li>
                        <a href="#"><img src="./imges/2.jpg" alt=""></a> 
                    </li>
                    <li>
                        <a href="#"><img src="./imges/3.jpg" alt=""></a> 
                    </li>
                </ul>
                <ul></ul>
                <a id="last" class="aut" href="javascript:;"><</a>
                <a id="next" class="aut" href="javascript:;">></a>
            </div>
        </body>
        <script src="js/bundle.js"></script>
        </html>

      css代码: 内涵css文件 less文件 需要即可引用