const fetchCoins = async () => {
  try {
    const url = 'https://api.coincap.io/v2/assets';
    const response = await fetch(url);
    const dados = await response.json();
    return dados.data;
  } catch (error) {
    console.log(error);
  }
};

fetchCoins();

const criaListaMoedas = async () => {
  const uList = document.getElementById('coins-list');
  
  const listaMoedas = await fetchCoins();
  const dezPrimeiras = listaMoedas.slice(0, 10);
  
  dezPrimeiras.forEach((coin) => {
    const list = document.createElement('li');
    uList.appendChild(list);
    list.innerHTML = `${coin.name} (${coin.symbol}): ${parseFloat(coin.priceUsd).toFixed(2)}`;
  });
};

window.onload = criaListaMoedas;
