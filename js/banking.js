// handle deposite button event
document.getElementById('deposite-btn').addEventListener('click', function () {
    // get the amount deposited
    const depositeInput = document.getElementById('deposite-input');
    const newDepositeText = depositeInput.value;
    const newDepositAmount = parseFloat(newDepositeText);
    console.log(newDepositAmount);

    // update deposite total
    const depositeTotal = document.getElementById('deposite-total');
    const previousDepositeText = depositeTotal.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeText);
    const newDepositeTotal = newDepositAmount + previousDepositeAmount;

    depositeTotal.innerText = newDepositeTotal;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear the deposite input field
    depositeInput.value = '';
});

document.getElementById('withdraw-btn').addEventListener('click', function () {
    // get withdraw Amount
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawText);
    console.log(newWithdrawAmount);


    // Update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);
    const newWithdrawTotal = newWithdrawAmount + previousWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;

    // update account balance
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceText);
    const newTotalBalance = previousTotalBalance - newWithdrawAmount;
    totalBalance.innerText = newTotalBalance;

    // clear the withdraw input field
    withdrawInput.value = '';

});
