const countdown = () => {
    const countDate = new Date("June 22, 2023 13:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    // how the time works
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;

    // calculate the time
    const remainingHours = Math.floor((gap % (24 * hour)) / hour);
    const remainingMinutes = Math.floor((gap % hour) / minute);
    const remainingSeconds = Math.floor((gap % minute) / second);

    document.querySelector(".hour").innerText = remainingHours + "h";
    document.querySelector(".minute").innerText = remainingMinutes + "m";
    document.querySelector(".second").innerText = remainingSeconds + "s";

    // flash black and red every second
    const responseImage = document.getElementById("response-image");
    responseImage.classList.toggle("flash", remainingSeconds % 2 === 0);
};

setInterval(countdown, 1000);
