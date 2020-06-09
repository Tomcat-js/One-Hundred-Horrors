// window.onload = function () {
//     searchFunction()
    
// }

// var display = document.querySelector(".display")

// const searchFunction = function() {
//     display.innerHTML = " ";
//     let api_key = 'eMbplpLZhNQaL8F649llHgQ1FCYUxZAn';
//     let url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=10&q="horror"`

//     axios.get(url).then(res =>  {
//         console.log(res.data.data[0].images.original.url)

//         for (let i = 0; i <= 10; i++) {
//             let article = document.createElement('article');
//             let img = document.createElement('img');
            
//             img.src = res.data.data[i].images.original.url;
            
//             display.appendChild(article);
//             article.appendChild(img);
//         }
//     })   
// }

// let api_key = 'eMbplpLZhNQaL8F649llHgQ1FCYUxZAn';
// let url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&offset=4&limit=10&q="horror"`

// const createTV = function() {

//     for (let i = 0; i < 3; i++) {

//         let url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&offset=3&limit=10&q="horror"`

//         const display = document.querySelector('.display');
    
//         axios.get(url).then(res =>  {
//             console.log(res.data.data[0].images.original.url)
//             let TV = document.createElement('div');
//             TV.className = 'TV';
//             let img = document.createElement('img');
//             img.src = res.data.data[0].images.downsized.url;
//             TV.appendChild(img);
//             display.appendChild(TV);

    
//         })

//     }


// }

const display = document.querySelector('.display');

const searchFunction = function() {
    display.innerHTML = " ";
    let api_key = 'eMbplpLZhNQaL8F649llHgQ1FCYUxZAn';
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=100&q="horror"`

    axios.get(url).then(res =>  {
        console.log(res.data.data[0].images.original_still.url)
        const TVbackgrounds = [
            "url('./images/TVtwo.png')", 
            "url('./images/TVone2.png')", 
            "url('./images/TVthree.png')", 
            "url('./images/TVfour.png')", 
            "url('./images/TVfive.png')", 
            "url('./images/TVsix3.png')", 
            "url('./images/TVseven.png')",
            "url('./images/TVeight.png')"
        ]
        let counter = 0;
        let moduloCount = 0;
        let TVbackgroundCount = 0;

        for (let i = 0; i <= 100; i++) {
            const handleClick = function(event) {
                event.target.src = res.data.data[i].images.original.url;
            }
            let article = document.createElement('article');
            article.className = "TV";

      
           
            
            
            if (counter % moduloCount === 0) {
                article.style.backgroundImage = TVbackgrounds[TVbackgroundCount];
            } else {
                article.style.backgroundImage = TVbackgrounds[5];
            }
           
            
            // if (counter % 6 === 0) {
            //     article.style.backgroundImage = TVbackgrounds[0];
            // } else if (counter % 5 === 0) {
            //     article.style.backgroundImage = TVbackgrounds[1];
            // } else if (counter % 4 === 0) {
            //     article.style.backgroundImage = TVbackgrounds[2];
            // } else if (counter % 3 === 0) {
            //     article.style.backgroundImage = TVbackgrounds[3];
            // } else if (counter % 2 === 0) {
            //     article.style.backgroundImage = TVbackgrounds[4];
            // } else if (counter % 1 === 0) {
            //     article.style.backgroundImage = TVbackgrounds[5];
            // }
 
            
            let img = document.createElement('img');
            
            img.src = res.data.data[i].images.original_still.url;
            
            display.appendChild(article);
            article.appendChild(img);
            img.addEventListener('click', handleClick);
            
            moduloCount ++
            TVbackgroundCount ++

            if (TVbackgroundCount > 6) {
                TVbackgroundCount = 0
            }

            counter ++
      
        }
        
    })  
    
}

searchFunction()









// let TVtwo = document.querySelector(".TVtwo");

// axios.get(url2).then(res =>  {
//     console.log(res.data.data[0].images.original.url)
//     let img = document.createElement('img');
//     img.src = res.data.data[0].images.downsized.url;
//     TVtwo.appendChild(img);

// })