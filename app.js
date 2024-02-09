let speech = new SpeechSynthesisUtterance();

let button = document.querySelector('button');
let voiceLst = [];

let voiceOpt = document.querySelector('select');

window.speechSynthesis.onvoiceschanged = () => {
    voiceLst = window.speechSynthesis.getVoices();
    speech.voice = voiceLst[0];
    voiceLst.forEach((voice, n) => {voiceOpt.options[n] = new Option(voice.name, n)});
};

voiceOpt.addEventListener('click', () => {
    speech.voice = voiceLst[voiceOpt.value];
})

button.addEventListener('click', ()=> {
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
})

