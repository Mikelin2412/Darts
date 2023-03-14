document.getElementsByClassName('bal')[0].style= "left:" + Math.random() * (1400 - 0) + 0 + "px";
const ball = document.getElementsByClassName('bal')[0];
const popalText = document.querySelector('.popados');

ball.addEventListener('mousemove', event => {
    const ballPosition = event.clientX;
    const cursor = ball.offsetWidth / 2;
    ball.style='left: ' + (ballPosition - cursor) + 'px';
    ball.addEventListener('click', () => {
        ball.style='top: 45px; left: ' + (ballPosition - cursor) + 'px; width: 20px; height: 20px;';
        const ballImage = document.querySelector('.ball-image');
        ballImage.style='top: 45px; left: ' + (ballPosition - cursor) + 'px; width: 20px; height: 20px;';
        console.log(ball.style.left);
        if (ball.style.left >= '690px' && ball.style.left <= '750px' && ball.style.top == '45px') {
            popalText.style='opacity: 1;';
        }
    })
})