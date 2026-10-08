function withdraw(balance, amount) {
    if (amount <= balance) {
        return "Withdrawal successful";
    }
    return "Insufficient Balance";
}

console.log(withdraw(10000, 30000));
