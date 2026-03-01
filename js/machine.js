function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    // console.log(value)
    return value;
}

function getBalance(){
    const currentBalance = document.getElementById("balance");
    const balance = currentBalance.innerText;
    return Number(balance);
}
function setBalance(value){
    const currentBalance = document.getElementById("balance"); 
    currentBalance.innerText = value;
    return value;
}

function showOnly(id){
    const addmoney = document.getElementById("add-money");
    const cashout = document.getElementById("cashout");
    const transfermoney = document.getElementById("transfer-money");
    const paybill = document.getElementById("paybill-money");
    const history = document.getElementById("history");

    addmoney.classList.add("hidden");
    cashout.classList.add("hidden");
    transfermoney.classList.add("hidden");
    paybill.classList.add("hidden");
    history.classList.add("hidden");

    const selected = document.getElementById(id);
    selected.classList.remove("hidden");

}
