export default function() {
  const div = document.querySelector(".clock");
  const currentTime = new Date();
  let seconds = currentTime.getSeconds();
  let minutes = currentTime.getMinutes();
  let hours = currentTime.getHours();
  hours = hours > 12 ? hours - 12 : hours;

  function* secondsGen() {
    while (true) {
      yield seconds++;
    }
  }
  const secGen = secondsGen();

  function* minutesGen() {
    while (true) {
      yield minutes++;
    }
  }
  const minGen = minutesGen();

  function* hoursGen() {
    while (true) {
      yield hours++;
    }
  }
  const hGen = hoursGen();

  setInterval(function() {
    secGen.next().value;
    if (seconds === 60) {
      minGen.next().value;
      seconds = 0;
    }
    if (minutes === 60) {
      hGen.next().value;
      minutes = 0;
    }
    if (hours === 12) {
      hours = 0;
    }

    div.innerHTML = `${hours
      .toString()
      .padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }, 1000);
}
