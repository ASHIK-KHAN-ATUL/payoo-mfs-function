// console.log('utilities file added');

// common shared functions here

// function getInputFieldValueById(){
//        const addMoney = document.getElementById('input-add-money').value;
//        return addMoney;  
// }
// function getInputFieldValueById(){
//     console.log('will get value by id')
//     const addMoney = document.getElementById('input-add-money').value ;
//     return addMoney;
// }


function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value ;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber ;
}

function showSectionById(id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transactions-form').classList.add('hidden');
    // show the form with the provide id as a parameter

    document.getElementById(id).classList.remove('hidden');
}