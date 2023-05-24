const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const start = () => {
  recognition.start();
};



recognition.onspeechend = function () {
//   recognition.start();
    recognition.stop();
};

recognition.onresult = (event) => {
    const text = event.results[0][0].transcript;
    console.log("text", text)
};

