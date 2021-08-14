let trans;
if ("webkitSpeechRecognition" in window) {
   trans = new webkitSpeechRecognition();
  let final_transcript = "";

  trans.continuous = true;
  trans.interimResults = true;
  trans.lang = "en-IN";


  trans.onstart = function(){
    document.querySelector("#msg").style.display = "block";
     console.log("Speech Recognition started");
  };

  trans.onerror = function(){
    document.querySelector("#msg").style.display = "none";
    console.log("Speech Recognition Error");
  };
  
  trans.onend = function(){
    document.querySelector("#msg").style.display = "none";
    console.log("Speech Recognition Ended");
  };


  trans.onresult = (event) => {
    let interim_transcript = "";

    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
      } else {
        interim_transcript += event.results[i][0].transcript;
      }
    }
   
    
     p = document.querySelector("#final");
     p.innerHTML = final_transcript;
     p = document.querySelector("#interim");
     p.innerHTML = interim_transcript;
  };

  document.querySelector("#start-btn").onclick = function(){
    recog.stop();
    trans.start();
    // recogState = false;

    // recog.start();
    // trans.start();
  };

  document.querySelector("#stop-btn").onclick = function(){
    trans.stop();
    recog.start();

    // trans.stop();
    // recog.stop();
  };

}


  else {
    console.log("Speech Recognition Not Available");
}