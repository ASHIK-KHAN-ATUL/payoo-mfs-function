document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();


    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');

    if(isNaN(addMoney)){
        alert('Failed to add money');
        return;
    }
 
    if( pinNumber === 1122 ){
        const balance = getTextFieldValueById('account-balance')
        console.log(balance, addMoney, pinNumber)

        const newBalance = balance + addMoney ;

        document.getElementById('account-balance').innerText = newBalance ;

        const date = new Date();
        const dateString = date.toLocaleString();

        // add to transaction histroy
        const p = document.createElement('p');
        p.classList.add('bg-green-500');
        p.innerText = `Added: ${addMoney}TK, New Balance: ${newBalance}TK, Date: ${dateString} `
        console.log(p);

        // should be a commmon function
        document.getElementById('transaction-container').appendChild(p);
    }
    else{
        alert('Failed to add money')
    }



    
})    