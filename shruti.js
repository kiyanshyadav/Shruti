// SHOW RANDOM ROAST
function showTroll() {
    let roasts = [
        "Bro, even Google can't find your value 💀🤣",
        "Your crush thinks you're a missing file... 404 Not Found 😂",
        "You were the inspiration behind Ctrl+Z 🥶",
        "Your face should be a default meme template 🤣"
    ];
    alert(roasts[Math.floor(Math.random() * roasts.length)]);
    navigator.vibrate(200); // Android Vibration Feedback
}

// SHOW RANDOM MEME ALERT
function showMeme() {
    let memes = [
        "You just got Rickrolled! 😆",
        "Don't laugh at your own jokes... leave that to us 😂",
        "Your browser is still loading your jokes 😴"
    ];
    alert(memes[Math.floor(Math.random() * memes.length)]);
    navigator.vibrate(100);
}

// RANDOM JOKE ON CLICK
function showRandomJoke() {
    let jokes = [
        "You're so slow, even a sloth overtook you! 🐌",
        "Your internet speed is still buffering from 2010 😂",
        "Even shadows leave you alone at night 💀"
    ];
    alert(jokes[Math.floor(Math.random() * jokes.length)]);
    navigator.vibrate(300);
}

// ENABLE GLITCH MODE
function glitchEffect() {
    document.body.style.animation = "glitch 0.2s infinite";
}

