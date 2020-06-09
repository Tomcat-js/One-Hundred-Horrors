let input = document.querySelector('input');
let btn = document.querySelector('button');
let continueBtn = document.querySelector('.continue');
let display = document.querySelector('.display');

const searchFunction = function(e) {
    e.preventDefault();
    display.innerHTML = " ";
    let api_key = 'eMbplpLZhNQaL8F649llHgQ1FCYUxZAn';
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=10&q=${input.value}`

    axios.get(url).then(res =>  {
        console.log(res.data.data[0].images.original.url)

        for (let i = 0; i <= 10; i++) {
            let article = document.createElement('article');
            let img = document.createElement('img');
            
            img.src = res.data.data[i].images.original.url;
            
            display.appendChild(article);
            article.appendChild(img);
        }
    })   
}

let offset = 11;

const searchAgain = function() {
    console.log(offset);
    let api_key = 'eMbplpLZhNQaL8F649llHgQ1FCYUxZAn';
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&offset=${offset}&limit=10&q=${input.value}`

    axios.get(url).then(res =>  {
        console.log(res.data.data[0].images.original.url)

        for (let i = 0; i <= 10; i++) {
            let article = document.createElement('article');
            let img = document.createElement('img');
            // let display = document.querySelector('.display');
            img.src = res.data.data[i].images.original.url;
            
            display.appendChild(article);
            article.appendChild(img);
        }      
    })
    offset += 10;
}
    
window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && offset < 50) {
        searchAgain();
    } else if (offset > 50) {
        continueBtn.className = "revealContinueBtn";
        newContBtn = document.querySelector('.revealContinueBtn');
        newContBtn.addEventListener('click', searchAgain);
    }
}

btn.addEventListener('click', searchFunction);

