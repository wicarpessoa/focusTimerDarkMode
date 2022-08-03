export default function sound() {
  const ForestSound = new Audio("../sounds/floresta.wav");
  const RainSound = new Audio("../sounds/Chuva.wav");
  const FireSound = new Audio("../sounds/Lareira.wav");
  const HomeSound = new Audio("../sounds/Cafeteria.wav");

  ForestSound.loop = true;
  RainSound.loop = true;
  FireSound.loop = true;
  HomeSound.loop = true;

  function pressForestSound() {
    ForestSound.play();
    RainSound.pause();
    FireSound.pause();
    HomeSound.pause();
  }
  function pressRainSound() {
    RainSound.play();
    ForestSound.pause();
    FireSound.pause();
    HomeSound.pause();
  }
  function pressFireSound() {
    FireSound.play();
    RainSound.pause();
    ForestSound.pause();
    HomeSound.pause();
  }
  function pressHomeSound() {
    HomeSound.play();
    RainSound.pause();
    ForestSound.pause();
    FireSound.pause();
  }
  return {
    pressForestSound,
    pressRainSound,
    pressFireSound,
    pressHomeSound,
    FireSound,
    RainSound,
    HomeSound,
    ForestSound,
  };
}
