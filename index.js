function calculateDuration() {
    var providedDate = new Date("June 22, 2023 14:00:00");
    var currentDate = new Date();
    var timeDifference = Math.abs(currentDate - providedDate);

    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.querySelector(".day").innerText = days + " days";
    document.querySelector(".hour").innerText = hours + " hours";
    document.querySelector(".minute").innerText = minutes + " minutes";
    document.querySelector(".second").innerText = seconds + " seconds";
}

// Call the function to calculate and display the duration
setInterval(calculateDuration, 1000);
