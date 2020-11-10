const input_currency = document.querySelector('#input_currency');
const output_currency = document.querySelector('#output_currency');
const input_amount = document.querySelector('#input_amount');
const output_amount = document.querySelector('#output_amount');
const exchange = document.querySelector('#exchange');
const rate = document.querySelector('#rate');

input_currency.addEventListener('change', getXchg);
output_currency.addEventListener('change', getXchg);
input_amount.addEventListener('input', getXchg);
output_amount.addEventListener('input', getXchg);

exchange.addEventListener('click', () => {
    const temp = input_currency.value;
    input_currency.value = output_currency.value;
    output_currency.value = temp;
    getXchg();
});

async function getXchg() {
    const input_currency1 = input_currency.value;
    const output_currency1 = output_currency.value;
    const API_url = `https://v6.exchangerate-api.com/v6/fb25600c5c271a7b80203932/latest/${input_currency1}`;
    const response = await fetch(API_url);
    const data = await response.json();
    const new_rate = data.conversion_rates[output_currency1];
    rate.innerText = `1 ${input_currency1} = ${new_rate} ${output_currency1}`
    output_amount.value = (input_amount.value * new_rate).toFixed(2);

}
getXchg();
