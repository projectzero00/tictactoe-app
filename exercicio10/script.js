
function handleCostKeydown(event) {
    if (event.key === 'Enter') {
        calculateTotal();
    }
}

function calculateTotal() {
    const inputElement = document.querySelector('.js-cost-input');
    const paramElement = document.querySelector('.js-total-cost');
    let cost = Number(inputElement.value);

    if (cost < 40 && cost > 0) {
        cost = cost + 10;
    } 
    
    if(cost < 0) {
        document.querySelector('.js-total-cost').innerHTML = `Error! Cost cannot be less than 0.`;
        paramElement.classList.add('js-total-cost-error');
    } else{
        document.querySelector('.js-total-cost')
        .innerHTML = `$${cost}`;
        paramElement.classList.remove('js-total-cost-error');
    }

    
}

function subscribe() {
    const buttonElement = document.querySelector('.js-subscribe-button');

    if (buttonElement.innerText === 'Subscribe') {
        buttonElement.innerHTML = 'Subscribed';
        buttonElement.classList.add('is-subscribed');
    } else {
        buttonElement.innerHTML = 'Subscribe';
        buttonElement.classList.remove('is-subscribed');
    }
}