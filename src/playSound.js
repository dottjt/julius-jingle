function chooseDataKey(e) {
  if (e.type === 'click') {
    return e.target.attributes['data-key'].nodeValue
  } else {
    return e.key;
  }
}

let audio = null;

function playSound(e) {
  const dataKey = chooseDataKey(e);
  const isRandomKey =
    dataKey === "A" || dataKey === "R" || dataKey === "S" ||
    dataKey === "z" || dataKey === "x" || dataKey === "c" || dataKey === "v" || dataKey === "b";

  if ((dataKey !== "t" || dataKey !== "g") && audio !== null) {
    if (isPlaying(audio)) {
      audio.pause();
      return;
    }
  }

  // play random the_topic
  if (dataKey === "A") {
    const audios = document.querySelectorAll('.random__the__topic');
    audio = audios[Math.floor(Math.random() * audios.length)];
  };

  // play random the_question
  if (dataKey === "R") {
    const audios = document.querySelectorAll('.random__the__question');
    audio = audios[Math.floor(Math.random() * audios.length)];
  }

  // play random the_viewermail
  if (dataKey === "S") {
    const audios = document.querySelectorAll('.random__the__viewermail');
    audio = audios[Math.floor(Math.random() * audios.length)];
  }

  if (dataKey === "z") {
    const audios = document.querySelectorAll('.random__fail');
    audio = audios[Math.floor(Math.random() * audios.length)];
    console.log(audio);
  }
  if (dataKey === "x") {
    const audios = document.querySelectorAll('.random__violent');
    audio = audios[Math.floor(Math.random() * audios.length)];
  }
  if (dataKey === "c") {
    const audios = document.querySelectorAll('.random__success');
    audio = audios[Math.floor(Math.random() * audios.length)];
  }
  if (dataKey === "v") {
    const audios = document.querySelectorAll('.random__random');
    audio = audios[Math.floor(Math.random() * audios.length)];
  }
  if (dataKey === "b") {
    const audios = document.querySelectorAll('.random__suspense');
    audio = audios[Math.floor(Math.random() * audios.length)];
  }

  // if normal key press
  if (!isRandomKey) {
    audio = document.querySelector(`audio[data-key="${dataKey}"]`);
  }

  // if (dataKey === "t") {
  //   var id1 = howlerTheme.play();
  //   howlerTheme.fade(8, 10, 1000, id1);
  // }

  // const key = document.querySelector(`div[data-key="${dataKey}"]`);

  if (!audio) return;
  // Add transition effects upon key press.
  // key.classList.add('playing');
  // Reset the audio evertime a key press is done.

  if (isPlaying(audio)) {
    if (dataKey === "t" || dataKey === "g") {
      console.log(audio);
      fade();
    } else {
      audio.pause();
    }
  } else {
    audio.volume = 1;
    audio.currentTime = 0;
    audio.play();
  }

  function fade(){
    if (audio.volume > 0.1){
      console.log(audio.volume);
      audio.volume -= 0.1;
      setTimeout(fade, 200);
    } else {
      audio.volume = 1;
      audio.pause();
    }
  }
}
