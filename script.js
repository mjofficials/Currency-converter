const API_url = 'https://v6.exchangerate-api.com/v6/fb25600c5c271a7b80203932/latest/USD';

async function getXchg() {
    const response = await fetch(API_url);
    const data = await response.json();
    console.log(data.conversion_rates);
}

getXchg();