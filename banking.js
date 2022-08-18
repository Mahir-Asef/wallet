document.getElementById("add-here").addEventListener("click", function() {

    //inputField
    const depositAmount =  document.getElementById("deposit");
    const totalDepositText = depositAmount.value;
     //    console.log(depositAmount);
    const totalDepositAmount = parseFloat(totalDepositText);
   

    //taggg
    const allDeposit = document.getElementById("total-added");
    allDepositText=allDeposit.innerText;
    const totalDeposit = parseFloat(allDepositText);
    // console.log(allDeposit);

    // Total Money Section
    const money = document.getElementById("total-money");
    allMoneyText=money.innerText;
    const totalMoney = parseFloat(allMoneyText);
    // console.log(totalMoney);
    depositAmount.value='';
    // Total deposit here
    if(totalDepositAmount>0){
        allDeposit.innerText =totalDeposit+totalDepositAmount;
        money.innerText = totalMoney+totalDepositAmount;
    }
    else{
        return alert("Please! Input a valid transaction!!");
    }
    // console.log(totalMoney)
    
  });


document.getElementById("withdraw-here").addEventListener("click", function() {

    //inputField
    const withdrawAmount =  document.getElementById("withdraw");
    const totalWithdrawText = withdrawAmount.value;
     //    console.log(depositAmount);
    const totalWithdrawAmount = parseFloat(totalWithdrawText);
   

    //textField
    const allWithdraw = document.getElementById("total-withdraw");
    allWithdrawText=allWithdraw.innerText;
    const totalWithdraw = parseFloat(allWithdrawText);
    // console.log(allDeposit);

    // Total Money Section
    const money = document.getElementById("total-money");
    allMoneyText=money.innerText;
    const totalMoney = parseFloat(allMoneyText);
    console.log(totalMoney);


    withdrawAmount.value='';
    // Total Withdraw here

    if(totalWithdrawAmount>0 && totalMoney>=totalWithdrawAmount){
        allWithdraw.innerText =totalWithdraw+totalWithdrawAmount;
        money.innerText = totalMoney-totalWithdrawAmount;
    }
    else{
        return alert("Please! Input a valid transaction!!");
    }
    // console.log(totalMoney)
   
  });
