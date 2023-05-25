const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
const start = () => {
  recognition.start();
};


recognition.onerror = function (event) {
  // Handle the error
  switch (event.error) {
    case "network":
      console.error("There was a network error");
      break;
    case "not-allowed":
      console.error("The user has denied permission to use the microphone");
      break;
    case "service-not-allowed":
      console.error(
        "The user has denied permission to use the speech recognition service"
      );
      break;
    default:
      console.error(event.error);
  }
};


recognition.onspeechend = function () {
    recognition.stop();
};

recognition.onresult = (event) => {
    const text = event.results[0][0].transcript;
    console.log("text", text)
    alert(text)
};

