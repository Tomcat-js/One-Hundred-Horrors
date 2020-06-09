
const display = document.querySelector('.display');

const searchFunction = function() {
    display.innerHTML = " ";
    let api_key = 'eMbplpLZhNQaL8F649llHgQ1FCYUxZAn';
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&offset=3&limit=100&q="horror"`

    axios.get(url).then(res =>  {
        // console.log(res.data.data[0].images.original_still.url)
        const TVbackgrounds = [
            "url('./images/TVtwo.png')", 
            "url('./images/TVone2.png')", 
            "url('./images/TVthree.png')", 
            "url('./images/TVfour.png')", 
            "url('./images/TVfive.png')", 
            "url('./images/TVsix.png')", 
            "url('./images/TVseven.png')",
            "url('./images/TVeight.png')",
            "url('./images/TVnine.png')",
            "url('./images/TVten.png')",
            "url('./images/TVeleven.png')",
            "url('./images/TVtwelve.png')",
            "url('./images/TVthirteen.png')"
        ]
        let counter = 0;
        let moduloCount = 0;
        let TVbackgroundCount = 0;

        for (let i = 0; i < res.data.data.length; i++) {
            
            const handleClick = function(event) {
                event.target.src = res.data.data[i].images.original.url;
            }

            let article = document.createElement('article');
            article.className = "TV";
            article.id = i

        
            if (counter % moduloCount === 0) {
                article.style.backgroundImage = TVbackgrounds[TVbackgroundCount];
            } else {
                article.style.backgroundImage = TVbackgrounds[5];
            }
            
            
            let img = document.createElement('img');
            
            img.src = res.data.data[i].images.original_still.url;
            
            display.appendChild(article);
            article.appendChild(img);
            img.addEventListener('click', handleClick);
            
            moduloCount ++
            TVbackgroundCount ++

            if (TVbackgroundCount > 12) {
                TVbackgroundCount = 0
            }

            counter ++
      
        }

        
        

        //   p1.get('hihat').start();
        //   if ([0, 4, 8, 12].indexOf(idx) >= 0) {
        //     p1.get('kick').start();
        //   }

        var vol = new Tone.Volume(-12).toMaster();
        // var reverb = new Tone.Freeverb(0.7).connect(vol);
   
        // var pingPong = new Tone.PingPongDelay("4n", 0.80).connect(reverb);
        
        // let randomNotes = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"]
        // let noteCounter = 0
        // const makeASound = () => {
        //     const synth = new Tone.Synth().connect(reverb);
        //     synth.triggerAttackRelease(randomNotes[noteCounter], "8n");
        //     noteCounter ++;
        //     Tone.start()
        // }
        var p1 = new Tone.Players({
            "kick": "https://cdn.jsdelivr.net/gh/Tonejs/Tone.js/examples/audio/505/kick.mp3", 
            "snare": "https://cdn.jsdelivr.net/gh/Tonejs/Tone.js/examples/audio/505/snare.mp3", 
            "hihat": "https://cdn.jsdelivr.net/gh/Tonejs/Tone.js/examples/audio/505/hh.mp3", 
          
          }, function() {
            //consoile.log(loaded)
          });
        let randomNotes = ["kick",  "snare", "hihat", "F4", "G4", "A4", "B4", "C5"]
        let noteCounter = 0

        p1.connect(vol);
        const makeASound = () => {
            p1.get(randomNotes[noteCounter]).start();
            noteCounter ++;
            // Tone.start()
        }

        for (let index = 0; index < 10; index++) {
            var TVid = document.getElementById(index);
            TVid.addEventListener('click', makeASound)
        }

       
        
        
    })  
    
}

searchFunction()







// if (counter % moduloCount === 0) {
//     article.style.backgroundImage = TVbackgrounds[TVbackgroundCount];
// } else {
//     article.style.backgroundImage = TVbackgrounds[5];
// }



// var vol = new Tone.Volume(-12).toMaster();
// var reverb = new Tone.Freeverb(0.7).connect(vol);
// var pingPong = new Tone.PingPongDelay("4n", 0.80).connect(reverb);


// const makeASound = () => {
//     const synth = new Tone.Synth().connect(pingPong);
//     synth.triggerAttackRelease("C4", "8n");
//     Tone.start()
// }
// var three = document.getElementById("3");
// three.addEventListener('click', makeASound)