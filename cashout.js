document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    
    const cashOut = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('input-cash-out-pin-number');
    // console.log(cashOut, pinNumber);


    if(isNaN(cashOut)){
        alert('Failed to CashOut');
        return;
    }

    if(pinNumber === 1122){

        const balance = getTextFieldValueById('account-balance');

        if(cashOut > balance){
            alert('You do not have enough money to cash out');
            return;
        }

        const newBalance = balance - cashOut; 

        document.getElementById('account-balance').innerText = newBalance ;


        const date = new Date();
        const dateString = date.toLocaleString();

        // add to transaction histroy
        const p = document.createElement('p');
        p.classList.add('bg-red-500');
        p.innerHTML= `
        <h4 class="text-2xl font-bold"> Cash Out </h4>
        <p> ${cashOut} Withdraw , New Balance ${newBalance} </p>
         <p> Date: ${dateString} </p>
        `

         // should be a commmon function
         document.getElementById('transaction-container').appendChild(p);
    }
    else{
        alert('Failed to CashOut , Try again after sometime.')
    }
})