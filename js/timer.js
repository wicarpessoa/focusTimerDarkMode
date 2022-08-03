export default function Timer({ secondsDisplay, minutesDisplay }) {
  let timerTimeOut;

  function countdown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);
      console.log(minutes, seconds);
      if (minutes === 0 && seconds <= 0) {
        clearTimeout(timerTimeOut);
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }
      updateDisplay(minutes, String(seconds - 1));
      countdown();
    }, 1000);
  }

  function updateDisplay(minutes, seconds) {
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
  }
  function stop() {
    clearTimeout(timerTimeOut);
  }
  return { countdown, updateDisplay, stop };
}
