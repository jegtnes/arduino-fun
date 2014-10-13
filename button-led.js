var five = require("johnny-five"),
bumperRed, bumperYellow,
ledRed, ledYellow;

five.Board().on("ready", function() {
  bumperRed = new five.Button(2);
  bumperYellow = new five.Button(3);
  ledYellow = new five.Led(12);
  ledRed = new five.Led(13);

  bumperRed.on("hit", function() {
    console.log('Red down');
    ledRed.on();
  }).on("release", function() {
    console.log('Red up');
    ledRed.off();
  });

  bumperYellow.on("hit", function() {
    console.log('Yellow down');
    ledYellow.on();
  }).on("release", function() {
    console.log('Yellow up');
    ledYellow.off();
  });
});
