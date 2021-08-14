let speech  = document.querySelector(".speeches");
let recog;
let recogState;
// let start  = document.querySelector(".start-btn"); 
// let stop  = document.querySelector(".stop-btn"); 

/*
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
//The speech recognition interface lives on the browser’s window object as SpeechRecognition in Firefox and as webkitSpeechRecognition in Chrome.




let recog = new window.SpeechRecognition();
recog.interimResults= true;

let p =document.createElement("p");

recog.addEventListener("result",function(e){
// console.log(e);
     let text =Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

console.log(text);
})
recog.start();
*/





// /*
if ("webkitSpeechRecognition" in window) {         

    // console.log("available");
     recog = new webkitSpeechRecognition();    //creating new object with name recog
     recog.interimResults = true;
   //  recog.continuous = true;
    recog.lang = "en-IN";
    recogState = true;

    let p =document.createElement("p");
    
    recog.addEventListener("result",function(e){
        // console.log("hii");
        console.log(e.results);
        let text =Array.from(e.results)
                  .map(result => result[0])
                  .map(result => result.transcript)
                  .join('');
                  
           p.innerText = text;
           speech.appendChild(p); 
           
           if(e.results[0].isFinal){       //if isFinal true that means statement reached at its final state so we need create another  paragraph tag for another statemet
           
            if(text.includes("hello")){
               p  = document.createElement("p");
               p.classList.add("reply");
               p.innerText = "Hii..";
               speech.appendChild(p);
            } 

            if(text.includes("how are you")){
               p  = document.createElement("p");
               p.classList.add("reply");
               p.innerText = "I am fine,You??";
               speech.appendChild(p);
            } 

            if(text.includes("what is your name")){
               p  = document.createElement("p");
               p.classList.add("reply");
               p.innerText = "For now,I don't have any name.You can give me one.";
               speech.appendChild(p);
            } 
            // isme le lo jo bnde ne bola 
            // let var = open google
            /* 
               if(text.includes("" , var)){
               p  = document.createElement("p");
               p.classList.add("reply");
               p.innerText = "Ok..Opening the You tube";
               speech.appendChild(p);
               window.open("https://www.var.com/");${var}
            } 
            */

            if(text.includes("open YouTube")){
               p  = document.createElement("p");
               p.classList.add("reply");
               p.innerText = "Ok..Opening the You tube";
               speech.appendChild(p);
               window.open("https://www.youtube.com/");
            } 
            if(text.includes("open Google")){
               p  = document.createElement("p");
               p.classList.add("reply");
               p.innerText = "Ok..Opening the You tube";
               speech.appendChild(p);
               window.open("https://www.google.com/");
            } 

            if(text.includes("open Gmail")){
               p  = document.createElement("p");
               p.classList.add("reply");
               p.innerText = "Ok..Opening your Gmail account";
               speech.appendChild(p);
               window.open(" https://www.google.com/intl/en-GB/gmail/about/#");
            } 

            if(text.includes("open LinkedIn")){
               p  = document.createElement("p");
               p.classList.add("reply");
               p.innerText = "Ok wait, Opening...";
               speech.appendChild(p);
               window.open(" https://www.linkedin.com/");
            } 

            if(text.includes("open GitHub")){
               p  = document.createElement("p");
               p.classList.add("reply");
               p.innerText = "Ok wait, Opening...";
               speech.appendChild(p);
               window.open(" https://github.com/");
            } 

            p = document.createElement("p");
           }

                  console.log(text);
                  console.log(e);
      
     })    
       
//  if(recogState==true){
//      recog.addEventListener("end",function(){
//       recog.start();
//       })
//     }


        recog.start();
  
} else {
    console.log("Speech Recognition Not Available")
  }