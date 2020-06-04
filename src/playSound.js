function chooseDataKey(e) {
  if (e.type === 'click') {
    return e.target.attributes['data-key'].nodeValue
  } else {
    return e.key;
  }
}

let audio = null;
// I was thinking
const audioList = [];

function playSound(e) {
  const dataKey = chooseDataKey(e);
  const isRandomKey =
    dataKey === "A" || dataKey === "R" || dataKey === "S" ||
    dataKey === "z" || dataKey === "x" || dataKey === "c" ||
    dataKey === "v" || dataKey === "b" || dataKey === "w";

  if (dataKey === "p" && audio !== null) {
    audioList.forEach(aud => aud.pause());
    // audio.pause();
  }
  console.log(dataKey);
  // if ((dataKey !== "t" || dataKey !== "d") && audio !== null) {
  //   if (isPlaying(audio)) {
  //     audio.pause();
  //     return;
  //   }
  // }

  // play random the_topic
  if (dataKey === "R") {
    const audios = document.querySelectorAll('.random__the__topic');
    audio = audios[Math.floor(Math.random() * audios.length)];
    audio.volume = 1;
  };

  // play random the_question
  if (dataKey === "A") {
    const audios = document.querySelectorAll('.random__the__question');
    audio = audios[Math.floor(Math.random() * audios.length)];
    audio.volume = 1;
  }

  // play random the_viewermail
  if (dataKey === "S") {
    const audios = document.querySelectorAll('.random__the__viewermail');
    audio = audios[Math.floor(Math.random() * audios.length)];
    audio.volume = 1;
  }

  if (dataKey === "z") {
    const audios = document.querySelectorAll('.random__fail');
    audio = audios[Math.floor(Math.random() * audios.length)];
    audio.volume = 0.5;
  }
  if (dataKey === "x") {
    const audios = document.querySelectorAll('.random__violent');
    audio = audios[Math.floor(Math.random() * audios.length)];
    audio.volume = 0.4;
  }
  if (dataKey === "c") {
    const audios = document.querySelectorAll('.random__success');
    audio = audios[Math.floor(Math.random() * audios.length)];
    audio.volume = 0.7;
  }
  if (dataKey === "v") {
    const audios = document.querySelectorAll('.random__random');
    audio = audios[Math.floor(Math.random() * audios.length)];
    audio.volume = 0.5;
  }
  if (dataKey === "b") {
    const audios = document.querySelectorAll('.random__suspense');
    audio = audios[Math.floor(Math.random() * audios.length)];
    audio.volume = 0.5;
  }
  if (dataKey === "w") {
    const audios = document.querySelectorAll('.random__waifu');
    audio = audios[Math.floor(Math.random() * audios.length)];
    audio.volume = 0.5;
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

  audioList.push(audio);

  if (isPlaying(audio)) {
    console.log(dataKey)
    if (dataKey === "t" || dataKey === "d") {
      audio.volume = 0.75;
      fade();
    } else {
      audio.pause();
    }
  } else {
    audio.currentTime = 0;
    console.log(audio);
    audio.play();
  }

  function fade(){
    if (audio.volume !== null){
      let volume = audio.volume;
      volume -= 0.04;
      if (volume < -0.01) {
        audio.volume = null;
        console.log(audio.volume, 'now null');
        return;
      } else {
        audio.volume -= 0.04;
        console.log(audio.volume);
      }
      setTimeout(fade, 200);
    } else {
      audio.volume = 0.75;
      audio.pause();
    }
  }
}
