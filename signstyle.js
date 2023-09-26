const form = [...document.querySelector('.signstyle').children];
signstyle.forEach((item, i) => {
    setTimeout(() => {
        item.style.opacity = 1;
    }, i * 100);
})