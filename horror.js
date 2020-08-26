const display = document.querySelector('.display');
let public_key = 'dc6zaTOxFJmzC';


let url1 = `https://api.giphy.com/v1/gifs/search?api_key=${public_key}&limit=25&q="horror"`
let url2 = `https://api.giphy.com/v1/gifs/search?api_key=${public_key}&offset=25&limit=25&q="horror"`
let url3 = `https://api.giphy.com/v1/gifs/search?api_key=${public_key}&offset=50&limit=25&q="horror"`
let url4 = `https://api.giphy.com/v1/gifs/search?api_key=${public_key}&offset=75&limit=25&q="horror"`

axios.all([
    axios.get(url1),
    axios.get(url2),
    axios.get(url3),
    axios.get(url4)
  ])
  .then(axios.spread((url1, url2, url3, url4) => {

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

    for (let i = 0; i < 25; i++) {

        const screenImage = i

        for (let idx = 1; idx < 5; idx++ ) {

            let randomBackground = Math.floor(Math.random() * 15);

            let TV = document.createElement('div');
            TV.className = 'TV';
            let screen = document.createElement('img');

            if (idx === 1) {
                screen.src = url1.data.data[screenImage].images.original_still.url;
                TV.style.backgroundImage = TVbackgrounds[randomBackground];
            } else if (idx === 2) {
                screen.src = url2.data.data[screenImage].images.original_still.url;
                TV.style.backgroundImage = TVbackgrounds[randomBackground];
            } else if (idx === 3) {
                screen.src = url3.data.data[screenImage].images.original_still.url;
                TV.style.backgroundImage = TVbackgrounds[randomBackground];
            } else {
                screen.src = url4.data.data[screenImage].images.original_still.url;
                TV.style.backgroundImage = TVbackgrounds[randomBackground];
            }


            const turnOnTV = function(event) {
                if (idx === 1) {
                    event.target.src = url1.data.data[screenImage].images.original.url;
                } else if (idx === 2) {
                    event.target.src = url2.data.data[screenImage].images.original.url;
                } else if (idx === 3) {
                    event.target.src = url3.data.data[screenImage].images.original.url;
                } else {
                    event.target.src = url4.data.data[screenImage].images.original.url;
                }
                
            }

            TV.appendChild(screen);
            display.appendChild(TV);       
            screen.addEventListener('click', turnOnTV);

        }

    }   

    const sounds = [
        'samples/ambience.mp3',
        'samples/ambience2.mp3',
        'samples/bassWalk.mp3',
        'samples/bell.mp3',
        'samples/child.mp3',
        'samples/delayBass.mp3',
        'samples/delayBass2.mp3',
        'samples/delayBass3.mp3',
        'samples/ghostScream.mp3',
        'samples/guitar.mp3',
        'samples/hall.mp3',
        'samples/hall2.mp3',
        'samples/hall3.mp3',
        'samples/hall4.mp3',
        'samples/helpMe.mp3',
        'samples/horror.mp3',
        'samples/horror2.mp3',
        'samples/horror3.mp3',
        'samples/horror4.mp3',
        'samples/horror5.mp3',
        'samples/hummer.mp3',
        'samples/laugh.mp3',
        'samples/lowBlubble.mp3',
        'samples/organ.mp3',
        'samples/pianoSpasm.mp3',
        'samples/roar.mp3',
        'samples/scream.mp3',
        'samples/scream2.mp3',
        'samples/shimmersNew.mp3',
        'samples/squelch.mp3',
        'samples/violin.mp3',
        'samples/violin_plucks.mp3',
        'samples/witch.mp3'
    ]

    

    let numOfScreens = document.querySelectorAll('img').length;

    for (let i = 0; i < numOfScreens; i++) {

        let randomSound = Math.floor(Math.random() * sounds.length);

        document.querySelectorAll('img')[i].addEventListener('click', () => {
            let audio = new Audio(sounds[randomSound]);
            audio.play(); 
        })
    }

      
}));





