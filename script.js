var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize stars with random opacity values
for (var i = 0; i < stars; i++) {
    var x = Math.random() * canvas.offsetWidth;
    var y = Math.random() * canvas.offsetHeight;
    var radius = Math.random() * 1.2;
    var hue = colorrange[getRandom(0, colorrange.length - 1)];
    var sat = getRandom(50, 100);
    var opacity = Math.random();
    starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;
/** True after first button click; until then no message text is drawn and frameNumber does not advance. */
var hasStarted = false;

var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

function drawStars() {
    for (var i = 0; i < stars; i++) {
        var star = starArray[i];

        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);
        context.fillStyle = "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
        context.fill();
    }
}

function updateStars() {
    for (var i = 0; i < stars; i++) {
        if (Math.random() > 0.99) {
            starArray[i].opacity = Math.random();
        }
    }
}

const button = document.getElementById("valentinesButton");
button.style.display = "block";

button.addEventListener("click", () => {
  if (button.textContent === "Click Me! ❤") {
    hasStarted = true;
    button.textContent = "❤";
    var wishEl = document.getElementById("valentineWish");
    var dateEl = document.getElementById("valentineDate");
    if (wishEl) wishEl.style.display = "none";
    if (dateEl) dateEl.style.display = "none";
    // fetch('send_mail.php')
    //   .then(response => {
    //     if (response.ok) {
    //       button.textContent = "Check Your Email 🙃";
    //     } else {
    //       console.error('Failed to send email');
    //       button.textContent = "Error 😞";
    //     }
    //   })
    //   .catch(error => {
    //     // Handle network errors or other issues
    //     console.error('Error:', error);
    //     button.textContent = "Error 😞";
    //   });
  }
});

function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
    lines.forEach((line, index) => {
        context.fillText(line, x, y + index * (fontSize + lineHeight));
    });
}

function drawText() {
    var fontSize = Math.min(30, window.innerWidth / 24); // Adjust font size based on screen width
    var lineHeight = 8;

    context.font = fontSize + "px Comic Sans MS";
    context.textAlign = "center";
    
    // glow effect
    context.shadowColor = "rgba(45, 45, 255, 1)";
    context.shadowBlur = 8;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;

    // Before first click: draw nothing so she only sees the button
    if (!hasStarted) {
        context.shadowColor = "transparent";
        context.shadowBlur = 0;
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;
        return;
    }

    if(frameNumber < 250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("everyday day I cannot believe how lucky I am", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    //fades out the text by decreasing the opacity
    if(frameNumber >= 250 && frameNumber < 500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("everyday day I cannot believe how lucky I am", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    //needs this if statement to reset the opacity before next statement on canvas
    if(frameNumber == 500){
        opacity = 0;
    }
    if(frameNumber > 500 && frameNumber < 750){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {           //shortens long sentence for mobile screens
            drawTextWithLineBreaks(["amongst trillions and trillions of stars,", "over billions of years"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("amongst trillions and trillions of stars, over billions of years", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 750 && frameNumber < 1000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["amongst trillions and trillions of stars,", "over billions of years"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("amongst trillions and trillions of stars, over billions of years", canvas.width/2, canvas.height/2);
        }

        opacity = opacity - 0.01;
    }

    if(frameNumber == 1000){
        opacity = 0;
    }
    if(frameNumber > 1000 && frameNumber < 1250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("to be alive, and to get to spend this life with you", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1250 && frameNumber < 1500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("to be alive, and to get to spend this life with you", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 1500){
        opacity = 0;
    }
    if(frameNumber > 1500 && frameNumber < 1750){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("is so incredibly, unfathomably unlikely", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1750 && frameNumber < 2000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("is so incredibly, unfathomably unlikely", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 2000){
        opacity = 0;
    }
    if(frameNumber > 2000 && frameNumber < 2250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["and yet here I am to get the impossible", "chance to get to know you"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("and yet here I am to get the impossible chance to get to know you", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 2250 && frameNumber < 2500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["and yet here I am to get the impossible", "chance to get to know you"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("and yet here I am to get the impossible chance to get to know you", canvas.width/2, canvas.height/2);
        }
        
        opacity = opacity - 0.01;
    }

    if(frameNumber == 2500){
        opacity = 0;
    }
    if(frameNumber > 2500 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["I love you so much Claidel, more than", "all the time and space in the universe can contain"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("I love you so much Claidel, more than all the time and space in the universe can contain", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    
    if(frameNumber >= 2750 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${secondOpacity})`;


        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["and I can't wait to spend all the time in", "the world to share that love with you!"], canvas.width / 2, (canvas.height/2 + 60), fontSize, lineHeight);
        } else {
            context.fillText("and I can't wait to spend all the time in the world to share that love with you!", canvas.width/2, (canvas.height/2 + 50));
        }

        secondOpacity = secondOpacity + 0.01;
    }

    if(frameNumber >= 3000 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${thirdOpacity})`;
        context.fillText("Happy Valentine's Day <3", canvas.width/2, (canvas.height/2 + 120));
        thirdOpacity = thirdOpacity + 0.01;
    }   

     // Reset the shadow effect after drawing the text
     context.shadowColor = "transparent";
     context.shadowBlur = 0;
     context.shadowOffsetX = 0;
     context.shadowOffsetY = 0;
}

function draw() {
    context.putImageData(baseFrame, 0, 0);

    drawStars();
    updateStars();
    drawText();

    if (hasStarted && frameNumber < 99999) {
        frameNumber++;
    }
    window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

/** Image slider popup: photos from list_images.php, or fallback if fetch fails (e.g. file:// or no server). */
var popupImages = [];
var popup = document.getElementById("photosPopup");
var popupBg = document.getElementById("popupBg");
var popupClose = document.getElementById("popupClose");
var sliderImage = document.getElementById("sliderImage");
var sliderPrev = document.getElementById("sliderPrev");
var sliderNext = document.getElementById("sliderNext");
var sliderIndex = 0;

var popupImagesFallback = (function () {
    var list = [];
    for (var i = 1; i <= 4; i++) list.push("public/images/us-" + i + ".png");
    list.push("public/images/us-5.jpeg");
    for (var j = 6; j <= 57; j++) list.push("public/images/us-" + j + ".png");
    return list;
})();

function buildPopupBg() {
    popupBg.innerHTML = "";
    var n = popupImages.length;
    popupImages.forEach(function (src, index) {
        var img = document.createElement("img");
        img.className = "popup-bg-img";
        img.src = src;
        img.alt = "";
        if (n > 0) {
            img.style.animationDelay = (index * (16 / n)) + "s";
        }
        popupBg.appendChild(img);
    });
    injectPopupBgKeyframes(n);
}

function injectPopupBgKeyframes(n) {
    var id = "popup-bg-keyframes";
    var existing = document.getElementById(id);
    if (existing) existing.remove();
    if (n <= 0) return;
    var pct = (100 / n).toFixed(2);
    var style = document.createElement("style");
    style.id = id;
    style.textContent = ".popup-bg .popup-bg-img { animation: popup-bg-fade-dyn 16s ease-in-out infinite; } " +
        "@keyframes popup-bg-fade-dyn { 0% { opacity: 0.3; } " + pct + "% { opacity: 0; } 100% { opacity: 0; } }";
    document.head.appendChild(style);
}

function initPopupImages(list) {
    if (Array.isArray(list) && list.length > 0) {
        popupImages = list;
    } else {
        popupImages = popupImagesFallback.slice();
    }
    buildPopupBg();
}

fetch("list_images.php")
    .then(function (r) {
        if (!r.ok) throw new Error("list_images.php " + r.status);
        return r.json();
    })
    .then(initPopupImages)
    .catch(function () {
        initPopupImages([]);
    });

function openPhotosPopup() {
    if (popupImages.length === 0) return;
    popup.removeAttribute("hidden");
    sliderIndex = 0;
    sliderImage.src = popupImages[0];
    sliderImage.alt = "Our photo " + (sliderIndex + 1);
    requestAnimationFrame(function () {
        popup.classList.add("is-open");
    });
}

function closePhotosPopup() {
    popup.classList.remove("is-open");
    setTimeout(function () {
        popup.setAttribute("hidden", "");
    }, 300);
}

function setSliderImage(index) {
    if (popupImages.length === 0) return;
    sliderIndex = (index + popupImages.length) % popupImages.length;
    sliderImage.src = popupImages[sliderIndex];
    sliderImage.alt = "Our photo " + (sliderIndex + 1);
}

document.getElementById("photosButton").addEventListener("click", openPhotosPopup);
popupClose.addEventListener("click", closePhotosPopup);
popup.addEventListener("click", function (e) {
    if (e.target === popup) closePhotosPopup();
});
sliderPrev.addEventListener("click", function (e) {
    e.stopPropagation();
    setSliderImage(sliderIndex - 1);
});
sliderNext.addEventListener("click", function (e) {
    e.stopPropagation();
    setSliderImage(sliderIndex + 1);
});

window.requestAnimationFrame(draw);
