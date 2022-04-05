export default function initFetchBitcoin() {

}

fetch('https://api.bitpreco.com/btc-brl/ticker')
.then(response => response.json())
.then(json => {
     const btcPreco = document.querySelector('.btc-preco');
     btcPreco.innerText = (1000 / json.sell).toFixed(4);
     console.log(json.sell)
}).catch(erro => {
     console.log(Error(erro));
});