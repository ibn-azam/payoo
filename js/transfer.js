document.getElementById("transfer-money-btn").addEventListener("click", function(){
    const accountNumber = getValueFromInput("input-transfer-number");

    const transferAmount = getValueFromInput("transfer-amount");
    
    const currentBalance = getBalance();
    

    const newBalance = currentBalance - Number(transferAmount);

    const pinNumber = getValueFromInput("input-transfer-pin")

    if(accountNumber.length !== 11 ){
        alert("Input Invalid Number");
    }else if(newBalance < 0){
        alert("Invalid Amount");
    }else if(pinNumber === "1234"){
        alert(`Transfer Money Successfull  from
            ${accountNumber}
            at ${new Date()}`);
        setBalance(newBalance)

        const history = document.getElementById("history-content");

        const newHistory = document.createElement("div");

        newHistory.innerHTML=`
        <div  class="transaction-card p-5 bg-base-100">
            Transfer Money Successfull  from
            ${accountNumber} , ${transferAmount} taka at ${new Date()} 
        </div>`;

        history.append(newHistory);
    }else{
        alert("Pin Invalid");
        
    }setBalance(newBalance);

    return;
   
})