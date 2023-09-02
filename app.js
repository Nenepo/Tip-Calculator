// In your app.js file

// GET ALL THE ID
const totalBillElement = document.getElementById('Total-bill');
const tipInput = document.getElementById('Tip');
const numberOfPeopleElement = document.querySelector('.number');
const calculateBillElement = document.getElementById('Totalbill');

// GET NUMBER OF PEOPLE FROM NUMBER OF PEOPLE ELEMENT
let numberOfPeople = Number(numberOfPeopleElement.innerText);
numberOfPeopleElement.innerText = 1;

// Function to calculate the bill
const calculateBill = () => {
  // GET BILL FROM USER INPUT AND CONVERT TO A NUMBER
  const totalBill = Number(totalBillElement.value) ;

  // GET TIP FROM USER INPUT AND CONVERT TO A %
  const tipPercentage = Number(tipInput.value)  / 100;

  
  const tipAmount = totalBill * tipPercentage;

  // CALCULATE TOTAL
  const total = tipAmount + totalBill;
  calculateBillElement.innerText = `$${total.toFixed(2)}`
  
   
   
   // CALCULATE PER PERSON TOTAL (TOTAL / BY THE NUMBER OF PEOPLE)
   if (numberOfPeople >= 1){
    // CALCULATE PER PERSON TOTAL (TOTAL / BY THE NUMBER OF PEOPLE)
    const perPersonTotal = total / numberOfPeople;
   // UPDATE THE PER PERSON TOTAL ON DOM
   calculateBillElement.innerText = `$${perPersonTotal.toFixed(2)}`;
  
   }
   
};


let addNumberOfPeople = document.getElementById('sum');
addNumberOfPeople.addEventListener('click', () => {
  // INCREASE NUMBER OF PEOPLE
  numberOfPeople++;
  // UPDATE DOM WITH THE NEW NUMBER OF PEOPLE
  numberOfPeopleElement.innerText = numberOfPeople;
  // CALCULATE BILL BASED ON THE NEW NUMBER OF PEOPLE
  
  calculateBill();
});

const substractNumberOfPeople = document.getElementById('substract');
substractNumberOfPeople.addEventListener('click', () => {
  if (numberOfPeople <= 1) {
    return;
  }

  // DECREMENT THE AMOUNT
  numberOfPeople--;
  // UPDATE DOM WITH THE NEW NUMBER OF PEOPLE
  numberOfPeopleElement.innerText = numberOfPeople;
  // CALCULATE BILL BASED ON THE NEW NUMBER OF PEOPLE
  calculateBill();
});

const reset = document.getElementById('reset')
reset.addEventListener('click', () => {
  numberOfPeopleElement.innerText = 1;
  totalBillElement.value = '';
  tipInput.value = '';
  calculateBillElement.innerText = '$0.00';
})
