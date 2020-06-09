
// // window.onload = function () {
  
// var test = document.querySelector(".test")

//     var vol = new Tone.Volume(-12).toMaster();
//     var reverb = new Tone.Freeverb(0.7).connect(vol);
//     var pingPong = new Tone.PingPongDelay("4n", 0.80).connect(reverb);
  
  
    
//     test.addEventListener('click', async () => {
//       const synth = new Tone.Synth().connect(pingPong);
//       synth.triggerAttackRelease("C4", "8n");
//       await Tone.start()
//     })
  
//   //   document.querySelector('.chords').addEventListener('click', async () => {
//   //     const synth = new Tone.Synth().connect(pingPong);
//   //     synth.triggerAttackRelease("Eb4", "8n");
//   //     await Tone.start()
//   //   })
  
//   //   document.querySelector('.solo').addEventListener('click', async () => {
//   //     const synth = new Tone.Synth().connect(pingPong);
//   //     synth.triggerAttackRelease("G4", "8n");
//   //     await Tone.start()
//   //   })
    
// //   }  