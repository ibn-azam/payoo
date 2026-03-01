document.getElementById("add-money-btn")
.addEventListener("click", function(){
    const bankAccount = getValueFromInput("add-money-bank");
    if(bankAccount == "Select a Bank"){
        alert("Please select a bank account");
        return;
    }
    const account = getValueFromInput("add-money-number");
    if(account.length !== 11){
        alert("Invalid Account No.");
        return;
    }

    const addAmount = getValueFromInput("add-amount");
    const newBalance = getBalance() + Number(addAmount);
    
    const addPin = getValueFromInput("add-money-pin");
    if(addPin === "1234"){
        alert(`Add Money Successfull  from
            ${bankAccount}
            at ${new Date()}`);
        setBalance(newBalance)

        const history = document.getElementById("history-content");

        const newHistory = document.createElement("div");

        newHistory.innerHTML=`
        <div  class="transaction-card p-5 bg-base-100">
            Add Money Successfull  from
            ${bankAccount} , ${addAmount}taka at ${new Date()} 
        </div>`;

        history.append(newHistory);
    }else{
        alert("Invalid Pin");
        return;
    }
})