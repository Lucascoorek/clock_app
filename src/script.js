export default function() {
  const { body } = document;

  const div = document.querySelector(".clock");
  const currentTime = new Date();
  let seconds = currentTime.getSeconds();
  let minutes = currentTime.getMinutes();
  let hours = currentTime.getHours();

  hours = hours > 12 ? hours - 12 : hours;
  function* secondsGen() {
    yield seconds++;
  }
  setInterval(function() {
    const gen = secondsGen();
    gen.next().value;
    if (seconds === 60) {
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
        if (hours === 12) {
          hours = 0;
        }
      }
      seconds = 0;
    }
    div.innerHTML = `${hours
      .toString()
      .padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }, 1000);
}
