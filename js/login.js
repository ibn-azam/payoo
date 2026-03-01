// This is LogIn Page Function
document.getElementById("login-btn")
.addEventListener("click", function(){
   const numberInput =  document.getElementById("input-number");
    const mobileNumber = numberInput.value;
    

    const pinInput =document.getElementById("input-pin");
    const pinNumber = pinInput.value;

    if(mobileNumber === "01720350601" && pinNumber === "1234"){
        alert("LogIn Complete");
        window.location.assign("home.html");
    }else  if(mobileNumber !== "01720350601" && pinNumber !== "1234"){
        alert("LogIn Failed");
    }
    else if(mobileNumber !== "01720350601" ){
        alert("Your Mobile Number Is Incorrect");
    }else if(pinNumber !== "1234"){
        alert("Your Pin Number Is Incorrect");
    } 
})