document.getElementById("cashout-btn").addEventListener("click", function(){
    const agentNumber = getValueFromInput("input-cashout-number");

    const cashoutAmount = getValueFromInput("cashout-amount");
    
    const currentBalance = getBalance();
    

    const newBalance = currentBalance - Number(cashoutAmount);

    const pinNumber = getValueFromInput("input-cashout-pin")

    if(agentNumber.length !== 11 ){
        alert("Input Invalid Number");
    }else if(newBalance < 0){
        alert("Invalid Amount");
    }else if(pinNumber === "1234"){
        alert(`Add Money Successfull  from
            ${agentNumber}
            at ${new Date()}`);
        setBalance(newBalance)

        const history = document.getElementById("history-content");

        const newHistory = document.createElement("div");

        newHistory.innerHTML=`
        <div  class="transaction-card p-5 bg-base-100">
            Cashout Money Successfull  from
            ${agentNumber} , ${cashoutAmount} taka at ${new Date()} 
        </div>`;

        history.append(newHistory);
    }else{
        alert("Pin Invalid");
        
    }setBalance(newBalance);

    return;
   
})

// document.getElementById("cashout-btn")
// .addEventListener("click", function(){
//     const inputAgentNumber = document.getElementById("input-cashout-number");
//     const agentNumber = inputAgentNumber.value;
    

//     const inputCashoutAmount = document.getElementById("cashout-amount");
//     const cashoutAmount = inputCashoutAmount.value;
    
//     const currentBalance = document.getElementById("balance");
//     const balance = currentBalance.innerText;
//     const newBalance = Number(balance) - Number(cashoutAmount);
    
//     const inputPin = document.getElementById("input-cashout-pin");
//     const pinNumber = inputPin.value;
    
//     if(agentNumber.length !== 11 ){
//         alert("Input Invalid Number");
//     }else if(newBalance < 0){
//         alert("Invalid Amount");
//     }else if(pinNumber === "5060"){
//         alert("Successful Cashout Payment");
//     }else{
//         alert("Pin Invalid");
//         return;
//     }currentBalance.innerText = newBalance;
// })