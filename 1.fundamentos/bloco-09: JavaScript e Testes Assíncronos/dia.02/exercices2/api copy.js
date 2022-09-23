const url = 'https://api.coincap.io/v2/assets';

function getCoins () {
  return fetch(url)
   .then(response => response.json())
   .then(data => data)
   .catch(error => console.log(error));
}

async function listCoins () {
  const {data} = await getCoins();
  // console.log (data);
  const coins = document.getElementById('coins-list');

  data.filter((element, i ) => i<10).forEach((element => {
    const li = document.createElement('li');
    li.innerText = `${element.name}(${element.symbol}): ${Number(element.priceUsd).toFixed(2)}`
    coins.appendChild(li);
  }));
}

listCoins();