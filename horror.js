
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

        
            if (counter % moduloCount === 0) {
                article.style.backgroundImage = TVbackgrounds[TVbackgroundCount];
            } else {
                article.className = "test"
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
            clickTest = function() {
                console.log("clicked")
            }
            let test = document.querySelector(".test")
            test.addEventListener('click', clickTest)
      
        }
        
    })  
    
}

searchFunction()










// if (counter % moduloCount === 0) {
//     article.style.backgroundImage = TVbackgrounds[TVbackgroundCount];
// } else {
//     article.style.backgroundImage = TVbackgrounds[5];
// }