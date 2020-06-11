
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
            "url('./images/TVthirteen.png')",
            "url('./images/TVfourteen.png')",
            "url('./images/TVfifteen.png')"
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

            if (TVbackgroundCount > 14) {
                TVbackgroundCount = 0
            }

            counter ++
      
        }

        
        

        var vol = new Tone.Volume(-12).toMaster();

        var samples = new Tone.Players({
            "halloween": "https://cdn.jsdelivr.net/gh/Tomcat-js/oneHundredHorrors/samples/hall.mp3",
            "halloween2": "https://cdn.jsdelivr.net/gh/Tomcat-js/oneHundredHorrors/samples/hall2.mp3",
            "halloween3": "https://cdn.jsdelivr.net/gh/Tomcat-js/oneHundredHorrors/samples/hall3.mp3",
            "halloween4": "https://cdn.jsdelivr.net/gh/Tomcat-js/oneHundredHorrors/samples/hall4.mp3",
            "scream": "https://cdn.jsdelivr.net/gh/Tomcat-js/oneHundredHorrors/samples/scream.mp3",
            "scream2": "https://cdn.jsdelivr.net/gh/Tomcat-js/oneHundredHorrors/samples/scream2.mp3",
            "ambience": "https://cdn.jsdelivr.net/gh/Tomcat-js/oneHundredHorrors/samples/ambience.mp3",
            "ambience2": "https://cdn.jsdelivr.net/gh/Tomcat-js/oneHundredHorrors/samples/ambience2.mp3",
            "horror": "https://cdn.jsdelivr.net/gh/Tomcat-js/oneHundredHorrors/samples/horror.mp3",
            "horror2": "https://cdn.jsdelivr.net/gh/Tomcat-js/oneHundredHorrors/samples/horror2.mp3",
            "horror3": "https://cdn.jsdelivr.net/gh/Tomcat-js/oneHundredHorrors/samples/horror3.mp3",
            "horror4": "https://cdn.jsdelivr.net/gh/Tomcat-js/oneHundredHorrors/samples/horror4.mp3",
            "horror5": "https://cdn.jsdelivr.net/gh/Tomcat-js/oneHundredHorrors/samples/horror5.mp3",
            "delayBass": "https://cdn.jsdelivr.net/gh/Tomcat-js/oneHundredHorrors/samples/delayBass.mp3",
            "delayBass2": "https://cdn.jsdelivr.net/gh/Tomcat-js/oneHundredHorrors/samples/delayBass2.mp3",
            "delayBass3": "https://cdn.jsdelivr.net/gh/Tomcat-js/oneHundredHorrors/samples/delayBass3.mp3",
            "ghostScream": "https://cdn.jsdelivr.net/gh/Tomcat-js/oneHundredHorrors/samples/ghostScream.mp3",
            "bell": "https://cdn.jsdelivr.net/gh/Tomcat-js/oneHundredHorrors/samples/bell.mp3",
            "child": "https://cdn.jsdelivr.net/gh/Tomcat-js/oneHundredHorrors/samples/child.mp3",
            "violin": "https://cdn.jsdelivr.net/gh/Tomcat-js/oneHundredHorrors/samples/violin.mp3",
            "violinPlucks": "https://cdn.jsdelivr.net/gh/Tomcat-js/oneHundredHorrors/samples/violin_plucks.mp3",
            "witch": "https://cdn.jsdelivr.net/gh/Tomcat-js/oneHundredHorrors/samples/witch.mp3",
            "bassWalk": "https://cdn.jsdelivr.net/gh/Tomcat-js/oneHundredHorrors/samples/bassWalk.mp3",
            "guitar": "https://cdn.jsdelivr.net/gh/Tomcat-js/oneHundredHorrors/samples/guitar.mp3",
            "helpMe": "https://cdn.jsdelivr.net/gh/Tomcat-js/oneHundredHorrors/samples/helpMe.mp3",
            "laugh": "https://cdn.jsdelivr.net/gh/Tomcat-js/oneHundredHorrors/samples/laugh.mp3",
            "shimmers": "https://cdn.jsdelivr.net/gh/Tomcat-js/oneHundredHorrors/samples/shimmers.mp3",
            "squelch": "https://cdn.jsdelivr.net/gh/Tomcat-js/oneHundredHorrors/samples/squelch.mp3",
            "hummer": "https://cdn.jsdelivr.net/gh/Tomcat-js/oneHundredHorrors/samples/hummer.mp3",
            "lowBlubble": "https://cdn.jsdelivr.net/gh/Tomcat-js/oneHundredHorrors/samples/lowBlubble.mp3",
            "organ": "https://cdn.jsdelivr.net/gh/Tomcat-js/oneHundredHorrors/samples/organ.mp3",
            "pianoSpasm": "https://cdn.jsdelivr.net/gh/Tomcat-js/oneHundredHorrors/samples/pianoSpasm.mp3",
            "roar": "https://cdn.jsdelivr.net/gh/Tomcat-js/oneHundredHorrors/samples/roar.mp3"
          
          });
        let soundList = [
            "ambience2",
            "halloween",
            "ambience", 
            "halloween2", 
            "halloween3",
            "squelch",   
            "halloween4", 
            "delayBass",
            "scream", 
            "horror3",
            "helpMe",
            "shimmers", 
            "scream2", 
            "bell",
            "laugh", 
            "horror",
            "delayBass2", 
            "child", 
            "violinPlucks",
            "ghostScream",
            "horror2", 
            "delayBass3",
            "violin",  
            "horror4",
            "witch",  
            "horror5", 
            "guitar",  
            "hummer",  
            "lowBlubble",  
            "organ",  
            "pianoSpasm",  
            "roar"  
        ]

        let soundList2 = [
            "ambience2",
            "ambience", 
            "squelch",   
            "delayBass",
            "scream", 
            "horror3",
            "helpMe",
            "shimmers", 
            "scream2", 
            "bell",
            "laugh", 
            "horror",
            "delayBass2", 
            "child", 
            "violinPlucks",
            "ghostScream",
            "horror2", 
            "delayBass3",
            "violin",  
            "horror4",
            "witch",  
            "horror5", 
            "guitar",  
            "hummer",  
            "lowBlubble",  
            "organ",  
            "pianoSpasm",  
            "roar"  
        ]
        

        
        let noteCounter = 0

        samples.connect(vol);

        const makeASound = () => {

            if (noteCounter < 32) {
                samples.get(soundList[noteCounter]).start();
                noteCounter ++;
            } else {
                samples.get(soundList2[Math.floor(Math.random() * 28)]).start();
            }
        }

        for (let index = 0; index < 100; index++) {
                let TVid = document.getElementById(index);
                TVid.addEventListener('click', makeASound)  
        }  

        const endSample = new Tone.Players({
            "end": "https://cdn.jsdelivr.net/gh/Tomcat-js/oneHundredHorrors/samples/end.mp3"
        }) 
        
        fadeToBlack = function() {
            let pageBody = document.querySelector('body')
            pageBody.classList.remove("flickerTV");
            pageBody.style.backgroundImage = 'none';
            pageBody.style.backgroundColor = 'black';
        }

        const allstatic = function  () {
            endSample.get('end').start()
            let pageBody = document.querySelector('body');
            pageBody.innerHTML = "";
            pageBody.className = "flickerTV";
            endSample.connect(vol);
    
            setTimeout(function(){ 
                
                fadeToBlack()
        
             }, 13500);
        }
        
        endSample.connect(vol);
    
        setTimeout(function(){ 
            
            allstatic()
    
         }, 1 * 60 * 1000);
        
    })  

 


    
}

searchFunction()







