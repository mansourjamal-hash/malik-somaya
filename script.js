function openEnvelope() {
    const container = document.querySelector('.envelope-container');
    const screen = document.getElementById('envelope-screen');
    const mainContent = document.getElementById('main-content');
    
    container.classList.add('open');
    
    setTimeout(() => {
        screen.classList.add('hide');
        document.body.style.overflow = 'auto'; 
        mainContent.classList.add('visible'); 
    }, 1000);
}

const countDownDate = new Date("Oct 10, 2026 17:00:00").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "حلت البركة وبدأ الحفل!";
    }
}, 1000);