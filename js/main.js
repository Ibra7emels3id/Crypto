// icin list
let icon = document.getElementById(`icon`)
let first = document.getElementById(`first`);
let nth = document.getElementById(`nth`);
let last = document.getElementById(`last`);

// Nav List Icon
let NavListIcon = document.getElementById(`NavListIcon`);
icon.addEventListener(`click`, () => {
    first.classList.toggle(`show`);
    nth.classList.toggle(`show`);
    last.classList.toggle(`show`);
    NavListIcon.classList.toggle(`show`)

})


// crypto Api
var btc = document.querySelector(`.btc`),
    eth = document.querySelector(`.eth`),
    dog = document.querySelector(`.dog`);

const options = {
            method: 'GET',
            headers: { accept: 'application/json' }
        };

fetch('https://api.coingecko.com/api/v3/simple/price?ids=Bitcoin%2CEthereum%2CDogecoin&vs_currencies=usd',options)
.then((Res)=>Res.json())
.then((Res)=>{
    Data = Res
    console.log(Data);
    btc.innerHTML = Data.bitcoin.usd
    eth.innerHTML = Data.ethereum.usd;
    dog.innerHTML = Data.dogecoin.usd;
})


// scroll sr 
let sr = ScrollReveal({
    distance: `40px`,
    duration: 2400,
    reset: true
})

sr.reveal(`header .contenaer .main-Nav`, { delay: 1000, origin: 'top' });
sr.reveal(`.main-header h3`, { delay: 400 });
sr.reveal(`.main-header p`, { delay: 600, origin: 'left' });
sr.reveal(`.main-header .botton`, { delay: 800, origin: 'bottom' });
sr.reveal(`.crypto .card`, { delay: 1000, origin: 'bottom' });
sr.reveal(`.main-header .img`, { delay: 700, origin: 'top' });































