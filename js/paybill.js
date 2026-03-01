document.getElementById("paybill-btn")
.addEventListener("click", function(){
    const bankAccount = getValueFromInput("paybill-bank");
    if(bankAccount == "Select To Pay"){
        alert("Please select a bank account");
        return;
    }
    const account = getValueFromInput("paybill-number");
    if(account.length !== 11){
        alert("Invalid Account No.");
        return;
    }

    const payAmount = getValueFromInput("paybill-amount");
    const newBalance = getBalance() - Number(payAmount);
    
    const addPin = getValueFromInput("paybill-pin");
    if(addPin === "1234"){
        alert(`Add Money Successfull  from
            ${bankAccount}
            at ${new Date()}`);
        setBalance(newBalance)

        const history = document.getElementById("history-content");

        const newHistory = document.createElement("div");

        newHistory.innerHTML=`
        <div  class="transaction-card p-5 bg-base-100">
            Add Money Successfull  to
            ${bankAccount} ,  ${payAmount} taka at ${new Date()} 
        </div>`;

        history.append(newHistory);
    }else{
        alert("Invalid Pin");
        return;
    }
})