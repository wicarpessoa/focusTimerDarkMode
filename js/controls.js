export default function Controls({
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
}) {
  function SoundForest() {
    buttonSoundForest.classList.add(
      "button-sound-active",
      "input-volume-active"
    );
    buttonSoundRain.classList.remove(
      "button-sound-active",
      "input-volume-active"
    );
    buttonSoundFire.classList.remove(
      "button-sound-active",
      "input-volume-active"
    );
    buttonSoundHome.classList.remove(
      "button-sound-active",
      "input-volume-active"
    );

    pathForest.classList.add("path-active");
    pathRain.classList.remove("path-active");
    pathFire.classList.remove("path-active");
    pathHome.classList.remove("path-active");
  }
  function SoundRain() {
    buttonSoundRain.classList.add("button-sound-active", "input-volume-active");
    buttonSoundFire.classList.remove(
      "button-sound-active",
      "input-volume-active"
    );
    buttonSoundForest.classList.remove(
      "button-sound-active",
      "input-volume-active"
    );
    buttonSoundHome.classList.remove(
      "button-sound-active",
      "input-volume-active"
    );

    pathRain.classList.add("path-active");
    pathForest.classList.remove("path-active");
    pathFire.classList.remove("path-active");
    pathHome.classList.remove("path-active");
  }
  function SoundFire() {
    buttonSoundFire.classList.add("button-sound-active", "input-volume-active");
    buttonSoundRain.classList.remove(
      "button-sound-active",
      "input-volume-active"
    );
    buttonSoundForest.classList.remove(
      "button-sound-active",
      "input-volume-active"
    );
    buttonSoundHome.classList.remove(
      "button-sound-active",
      "input-volume-active"
    );

    pathFire.classList.add("path-active");
    pathRain.classList.remove("path-active");
    pathForest.classList.remove("path-active");
    pathHome.classList.remove("path-active");
  }
  function SoundHome() {
    buttonSoundHome.classList.add("button-sound-active", "input-volume-active");
    buttonSoundFire.classList.remove(
      "button-sound-active",
      "input-volume-active"
    );
    buttonSoundRain.classList.remove(
      "button-sound-active",
      "input-volume-active"
    );
    buttonSoundForest.classList.remove(
      "button-sound-active",
      "input-volume-active"
    );

    pathHome.classList.add("path-active");
    pathFire.classList.remove("path-active");
    pathRain.classList.remove("path-active");
    pathForest.classList.remove("path-active");
  }

  function lightTheme() {
    buttonLightTheme.classList.add("display-none");
    buttonDarkTheme.classList.remove("display-none");
    console.log(body);
    body.classList.add("dark-theme");
  }
  function darkTheme() {
    buttonLightTheme.classList.remove("display-none");
    buttonDarkTheme.classList.add("display-none");
    body.classList.remove("dark-theme");
  }

  return {
    SoundFire,
    SoundForest,
    SoundHome,
    SoundRain,
    lightTheme,
    darkTheme,
  };
}
