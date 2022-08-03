import Sound from "./sound.js";
import Controls from "./controls.js";
import Timer from "./timer.js";
import {
  buttonPlay,
  buttonStop,
  buttonAddMinutes,
  buttonSubMinutes,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundFire,
  buttonSoundHome,
  pathFire,
  pathForest,
  pathRain,
  pathHome,
  buttonLightTheme,
  buttonDarkTheme,
  body,
  inputSoundForest,
  inputSoundHome,
  inputSoundRain,
  inputSoundFire,
  minutesDisplay,
  secondsDisplay,
} from "./config.js";

const controls = Controls({
  buttonSoundFire,
  buttonSoundForest,
  buttonSoundHome,
  buttonSoundRain,
  pathFire,
  pathForest,
  pathHome,
  pathRain,
  buttonLightTheme,
  buttonDarkTheme,
  body,
});

const sound = Sound();
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
});

buttonAddMinutes.addEventListener("click", function () {
  timer.updateDisplay(
    Number(minutesDisplay.textContent) + 5,
    Number(secondsDisplay.textContent)
  );
});
buttonSubMinutes.addEventListener("click", function () {
  if (Number(minutesDisplay.textContent) < 5) {
    return;
  }
  timer.updateDisplay(
    Number(minutesDisplay.textContent) - 5,
    Number(secondsDisplay.textContent)
  );
});

buttonPlay.addEventListener("click", function () {
  timer.stop();
  timer.countdown();
});

buttonStop.addEventListener("click", function () {
  timer.stop();
});

buttonSoundForest.addEventListener("click", function () {
  sound.pressForestSound();
  controls.SoundForest();
});
buttonSoundRain.addEventListener("click", function () {
  sound.pressRainSound();
  controls.SoundRain();
});
buttonSoundFire.addEventListener("click", function () {
  sound.pressFireSound();
  controls.SoundFire();
});

buttonSoundHome.addEventListener("click", function () {
  sound.pressHomeSound();
  controls.SoundHome();
});

buttonLightTheme.addEventListener("click", function () {
  controls.lightTheme();
});

buttonDarkTheme.addEventListener("click", function () {
  controls.darkTheme();
});

inputSoundRain.addEventListener("change", function () {
  sound.RainSound.volume = inputSoundRain.value / 100;
});
inputSoundHome.addEventListener("change", function () {
  sound.HomeSound.volume = inputSoundHome.value / 100;
});

inputSoundForest.addEventListener("change", function () {
  sound.ForestSound.volume = inputSoundForest.value / 100;
});
inputSoundFire.addEventListener("change", function () {
  sound.FireSound.volume = inputSoundFire.value / 100;
});
