function GetYes() {
    fetch("https://yesno.wtf/api?force=yes")
        .then((response) => response.json())
        .then((data) => {
            const jsonResponse = data;
            console.log(jsonResponse);

            // Update the image source with the URL from the JSON response
            const responseImage = document.getElementById("response-image");
            responseImage.src = jsonResponse.image;
        })
        .catch((error) => {
            console.log("Error:", error);
        });
}

function GetNo() {
    fetch("https://yesno.wtf/api?force=no")
        .then((response) => response.json())
        .then((data) => {
            const jsonResponse = data;
            console.log(jsonResponse);

            // Update the image source with the URL from the JSON response
            const responseImage = document.getElementById("response-image");
            responseImage.src = jsonResponse.image;
        })
        .catch((error) => {
            console.log("Error:", error);
        });
}

const countdown = () => {
    const countDate = new Date("June 22, 2023 11:00:00").getTime();
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
};

setInterval(countdown, 1000);
