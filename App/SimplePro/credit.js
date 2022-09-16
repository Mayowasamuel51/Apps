// NOTE     TRY AND STUDY THE CODE IF U DONT UNDERSTAND ANY OF IT  .. CALL ME TO EXPLAN
// THE FIRST THING I DID WAS TO CREATE A DATABASE CALLED (database_one which is holding the data for Dashboard one)
const dashboardOne = document.querySelector('#dashboardOne');
const database_one = {
    customer: 'Mayor',
    balance: 300,
    mtn_prices: 0,
    glo_prices: 0,
    aritel_price: 0
}
let customer_name = document.querySelector('.name1').textContent = database_one.customer
let balance1 = document.querySelector('.balance1').textContent = database_one.balance
let mtn_price = document.querySelector('.mtn-1').textContent = database_one.mtn_prices
let aritel_price = document.querySelector('.aritel-1').textContent = database_one.aritel_price;
let glo_price = document.querySelector('.glo-1').textContent = database_one.glo_prices;
function NetworkOne() {
    let input_1 = parseInt(document.querySelector('.input-1').value)
    let network_1 = document.querySelector('.network-1').value;
    let error = document.querySelector('.error')
    if (input_1 > balance1) {
        error.textContent = 'SLOW FUNDS';
    } else {
        error.textContent = ''
        if (network_1 === 'MTN') {
            console.log(balance1 -= input_1)
            document.querySelector('.balance1').textContent = database_one.balance -= input_1
            document.querySelector('.mtn-1').textContent = database_one.mtn_prices += input_1
        } else if (network_1 === 'GLO') {
            console.log(balance1 -= input_1)
            document.querySelector('.balance1').textContent = database_one.balance -= input_1
            document.querySelector('.glo-1').textContent = database_one.glo_prices += input_1
        }
        else if (network_1 === 'ARITEL') {
            console.log(balance1 -= input_1)
            document.querySelector('.balance1').textContent = database_one.balance -= input_1
            document.querySelector('.aritel-1').textContent = database_one.aritel_price += input_1
        }
    }

}
dashboardOne.addEventListener('click', NetworkOne)



//ASSIGNMENT    BUILD THE ONE FOR THE DASHBOARD 2 
