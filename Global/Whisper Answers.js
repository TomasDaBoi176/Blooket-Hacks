// Blooket-Hacks  -  @ 2022 CrazyH & cph101

if (console_msg("Whisper Answers")) {
function whisperAnswer() {
if(document.getElementsByClassName("styles__questionContainer___6eJ0Y-camelCase")[0]) {
var correctAns = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.question.correctAnswers[0];
var ansArray = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.question.answers;
var ansIndex = ansArray.indexOf(correctAns);
document.getElementsByClassName("styles__playerEnergy___G4cGN-camelCase")[0].innerHTML = ansIndex+1;
} else {
document.getElementsByClassName("styles__playerEnergy___G4cGN-camelCase")[0].innerHTML = 0;
}};

(() => {
    let n = document.createElement('iframe');
    document.body.append(n);
    window.alert = n.contentWindow.alert.bind(window);
    window.prompt = n.contentWindow.prompt.bind(window);
    window.confirm = n.contentWindow.confirm.bind(window);
    n.remove();
})();

alert("The answer for every question will be displayed in the coins number (Top Right Of The Screen)");
window.setInterval(whisperAnswer);
}

// Console Message Code
function console_msg(file, state) {
   if (!state) {
       if (window.location.host === "play.blooket.com" || window.location.host === "dashboard.blooket.com") {
           console_msg(file, true);
           return true;
       } else if (window.location.host === "www.blooket.com" || window.location.host === "id.blooket.com") {
           console_msg(file, "Please run this hack on the dashboard or in a game");
           return;
       } else {
           console_msg(file, "Please run this hack on blooket");
           return;
       }
   } else {
       console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"); // Spacing: 60
       var style = 'color: yellow; -webkit-text-stroke: 1px black; font-size:30px;';
       console.info('%c📁 Loaded: '+file+'.js\n', style );
       console.group("📣 Blooket Hacks By cph101 & CrazyH - Announcement 📣"); // Open Console Group
       var style = 'color: tomato; -webkit-text-stroke: 1px black; font-size:30px;';
       console.info('%c👋🏻 Hi, We are Happy to have you as one of our users', style );
       var style = 'color: blue; -webkit-text-stroke: 1px black; font-size:30px;';
       console.info('%c⭐️ Please star our Github repo', style );
       if (state === true) {
           var style = 'color: green; -webkit-text-stroke: 1px black; font-size:30px;';
           console.info('%c✅ Hack Successfully Enabled', style );
       } else {
           var style = 'color: red; -webkit-text-stroke: 1px black; font-size:30px;';
           console.info('%c❌ Failed To Enable Hack', style );
       }
       console.groupEnd(); // Close Console Group
       if (state != true) alert(state);
}};