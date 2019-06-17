// Initialize game variables
var simonGame = {
  count: 0,
  planets: ["#green", "#red", "#yellow", "#blue"],
  compSeq: [],
  playerSeq: [],
  planetSound: {
    green: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
    red: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
    blue: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
    yellow: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
  },
  strictMode: false,
}

// Attach sounds and visual animation to each pad press
function planetSounds(color) {
switch (color) {
  case "#green":
    simonGame.planetSound.green.play();
    break;
  case "#red":
    simonGame.planetSound.red.play();
    break;
  case "#yellow":
    simonGame.planetSound.yellow.play();
    break;
  case "#blue":
    simonGame.planetSound.blue.play();
    break;
}
}

function planetAnimation(color) {
    $(color).addClass("animate");
    planetSounds(color);
    setTimeout(function() {
      $(color).removeClass("animate");
    }, 500)
}


// Strict Mode
function checkStrict() {
    if ($("#customSwitch1").is(":checked")){
      simonGame.strict = true;
    } else {
      simonGame.strict = false;
    }
}

// When player presses "Start," start the game
$("#start").click(function() {
    checkStrict();
    resetSimonGame();
    $("#count-num").html("--");
    generateNext();
});

// Reset the game
function resetSimonGame() {
    simonGame.compSeq = [];
    simonGame.playerSeq = [];
    simonGame.count = 0;
}

// Generate the next color
function generateNext() {
    simonGame.count++;
    if (simonGame.count < 10) {
      $("#count-num").html("0" + simonGame.count);
    } else {
      $("#count-num").html(simonGame.count);
    }
    simonGame.compSeq.push(simonGame.planets[(Math.floor(Math.random() * 4))]);
    playSeq();
}

// Play the entire sequence of colors
function playSeq() {
    var i = 0;
    var seq = setInterval(function() {
      planetAnimation(simonGame.compSeq[i]);
      i++;
      if (i >= simonGame.compSeq.length) {
        clearInterval(seq);
      }
    }, 700)
    simonGame.playerSeq = [];
}

// Add whichever color the player clicked on onto the player's sequence
function addColorToPlayer(id) {
    var color = "#" + id;
    console.log(color);
    simonGame.playerSeq.push(color);
    checkPlayerMove(color);
}

// Check if the player move matched the last color
// If no, either re-play the sequence (normal mode) or end the game (strict mode)
// If yes, move on
// When count equals 20, the player wins!
function checkPlayerMove(color) {
if (simonGame.playerSeq[simonGame.playerSeq.length - 1] !== simonGame.compSeq[simonGame.playerSeq.length - 1]) {
  planetSounds(color);
  if (simonGame.strict === true) {
    $("#msg").text("Wrong Move");
    $("#msg2").text("Your Score : " + simonGame.count);
    $("#board").fadeOut("slow");
    $("#final-screen").fadeTo("slow",1);
  } else {
    //insert some kind of warning message thing here saying wrong
    setTimeout(function() {
        alert("Wrong move! Try again.");
      }, 500);
    setTimeout(function() {
        playSeq();
      }, 500);
  }
} else {
  planetSounds(color);
  var checkCorrect = simonGame.playerSeq.length === simonGame.compSeq.length;
  if (checkCorrect) {
    if (simonGame.count === 20) {
      $("#msg").text("You won!");
      $("#msg2").text("Your Score : " + simonGame.count);
      $("#board").fadeOut("slow");
      $("#final-screen").fadeTo("slow",1);
    } else {
      setTimeout(function() {
        generateNext();
      }, 850)
    }
  }
}
}

$("#new-game").click(function() {
$("#final-screen").fadeOut("slow");
$("#board").fadeTo("slow",1);
$("#customSwitch1").prop("checked", false);
resetSimonGame();
$("#count-num").html("--");
});