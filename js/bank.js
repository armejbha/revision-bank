// deposite section 
document.getElementById('deposit-button').addEventListener('click', function () {
    // get deposit 
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);
    // previus deposit 
    const depositTotal = document.getElementById('deposit-total');
    const previusDepositText = depositTotal.innerText;
    const previusDepositAmount = parseFloat(previusDepositText);
    // adding deposit 
    const newDepositTotal = previusDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
    // total balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    // total adding 
    const newBalanceTotal = balanceTotalAmount + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    // clear 
    depositInput.value = '';
})
// withdraw section 
document.getElementById('withdraw-button').addEventListener('click', function () {
    // get withdraw 
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawText);
    // previut withdraw 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previusWithdrawText = withdrawTotal.innerText;
    const previusWithdrawAmount = parseFloat(previusWithdrawText);
    // adding withdraw 
    const newWithdrawTotal = previusWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    // total balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    // total adding 
    const newBalanceTotal = balanceTotalAmount - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
    // clear 
    withdrawInput.value = '';
})