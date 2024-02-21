document.addEventListener("DOMContentLoaded", function () {
    // 获取包含背景图片的元素
    const container = document.querySelector(".container");

    // 定义背景图片路径数组
    const backgrounds = [
        "https://app.potiankeji.top/cdn/img/background1.webp",
        "https://app.potiankeji.top/cdn/img/background2.webp",
        "https://app.potiankeji.top/cdn/img/background3.webp",
        "https://app.potiankeji.top/cdn/img/background4.webp",
        "https://app.potiankeji.top/cdn/img/background5.webp",
        "https://app.potiankeji.top/cdn/img/background6.webp",
        "https://app.potiankeji.top/cdn/img/background7.webp",
        "https://app.potiankeji.top/cdn/img/background8.webp",
        "https://app.potiankeji.top/cdn/img/background9.webp",
        "https://app.potiankeji.top/cdn/img/background10.webp",
    ];


    // 生成随机索引
    const randomIndex = Math.floor(Math.random() * backgrounds.length);

    // 设置背景图片
    container.style.backgroundImage = `url('${backgrounds[randomIndex]}')`;

    // 生成随机字体颜色
    const randomColor = getRandomColor();

    // 设置CSS变量，这里用到了CSS自定义属性（CSS变量）
    document.documentElement.style.setProperty("--font-color", randomColor);
});

// 生成随机颜色的函数
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
