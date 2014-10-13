var five = require("johnny-five"),
  board, ledYellow, ledRed, ledGreen;

board = new five.Board();

board.on("ready", function() {

  ledYellow = new five.Led({
    pin: 13
  });

  ledGreen = new five.Led({
    pin: 9
  });

  ledRed = new five.Led({
    pin: 2
  });

  ledYellow.off();
  ledRed.off();
  ledGreen.off();

  this.wait(500, function() {
    ledYellow.strobe(200);
    ledGreen.strobe(200);
    ledRed.strobe(200);
  });

  this.wait(2000, function() {
    ledYellow.strobe(200);
    ledGreen.strobe(50);
    ledRed.strobe(100);
  });

  this.wait(4000, function() {
    ledYellow.strobe(25);
    ledGreen.strobe(100);
    ledRed.strobe(50);
  });

  this.wait(6000, function() {
    ledYellow.strobe(75);
    ledGreen.strobe(100);
    ledRed.strobe(50);
  });

  this.wait(8000, function() {
    ledGreen.strobe(250);
    ledYellow.pulse(250);
    ledRed.pulse(250);
  });

  this.wait(10000, function() {
    ledYellow.stop().off();
    ledGreen.stop().off();
    ledRed.stop().off();
  });
});
