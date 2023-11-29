
// In this JS code i have went one step further and tried to validate the input fields in a way that they will
// only accept numeric values and only one decimal point

let number1 = document.getElementById('num1');
let number2 = document.getElementById('num2');
let answer = document.getElementById('ans');

number1.addEventListener('input', () => {
    answer.value = "";
    let num = number1.value;
     // this line removes any non-numeric characters from the input field
     let numericValue = num.replace(/[^0-9.]/g, '');
      // this line checks if there is more than one decimal point
      if ((numericValue.match(/\./g) || []).length > 1) {
        // If there is more than one decimal point, this line will remove the last decimal point
        numericValue = numericValue.slice(0, -1);
    }
    number1.value = numericValue;
})

number2.addEventListener('input', () => {
    answer.value = "";
    let num = number2.value;
     // this line removes any non-numeric characters from the input field
    let numericValue = num.replace(/[^0-9.]/g, '');
      // this line checks if there is more than one decimal point
    if ((numericValue.match(/\./g) || []).length > 1) {
      // If there is more than one decimal point, this line will remove the last decimal point
      numericValue = numericValue.slice(0, -1);
  }
  number2.value = numericValue;
})


const sum = (event) => {
    event.preventDefault(); //this line of code prevents default form submission behavior

    //this line of codes below are for selecting the input fields
    let number1 = document.getElementById('num1');
    let number2 = document.getElementById('num2');
    let operator = document.getElementById('operator');
    let answer = document.getElementById('ans');

    //this codes below converts strings into decimal or non-decimal numeric values
    // and set the values of input fields to the variables
    let num1 = parseFloat(number1.value);
    operator = operator.value;
    let num2 = parseFloat(number2.value);

    let result; //declaring a variable to store calculation
    
    if(isNaN(num1) || isNaN(num2)){ //if the inputs are not a number(NaN) this condition will run
        result = 'select numbers ‼️';
        answer.classList.add('wrong');
    }else{ // if the inputs are numbers further calculation will run
        answer.classList.remove('wrong');
        switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        default:
            result = 'something went wrong ‼️';
            break;
    }
    }
    
    //this if condition checks if there is any decimal point in the number then display 
    //number that will have only 3 digits after decimal point else display the number without decimal point
    if(result.toString().includes('.')){ 
        answer.value = result.toFixed(3); 
    }else{
        answer.value = result; 
    }
}
