const five = require("johnny-five");
const board = new five.Board();

board.on("ready", function () {
  // Create a new `photoresistor` hardware instance.
  photoresistor = new five.Sensor({
    pin: "A2",
    freq: 250,
  });
  debugger;
  // "data" get the current reading from the photoresistor
  photoresistor.on("data", function () {
    console.log(this.value);
  });

  console.log("board is ready and connected");
  const led = new five.Led(13);
  led.blink(5000);
});
// בדיקה אם  הלוח אנדרואינו מחובר  למחשב
//123
