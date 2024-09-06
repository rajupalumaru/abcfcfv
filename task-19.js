// ATM Object to hold user account data
const atm = {
    balance: 1000, // Initial balance
    miniStatement: [], // Array to store transaction history
    pin: 1234 // Set a simple PIN for authentication
};

// Function to authenticate user
function authenticate(inputPin) {
    return inputPin === atm.pin;
}

// Deposit function
function deposit(amount) {
    if (amount > 0) {
        atm.balance += amount;
        atm.miniStatement.push(`Deposited: $${amount}`);
        console.log(`Successfully deposited $${amount}.`);
    } else {
        console.log("Invalid deposit amount.");
    }
}

// Withdraw function
function withdraw(amount) {
    if (amount > 0 && amount <= atm.balance) {
        atm.balance -= amount;
        atm.miniStatement.push(`Withdrew: $${amount}`);
        console.log(`Successfully withdrew $${amount}.`);
    } else {
        console.log("Invalid or insufficient funds.");
    }
}

// Balance Enquiry function
function balanceEnquiry() {
    console.log(`Your current balance is $${atm.balance}.`);
}

// Money Transfer function
function moneyTransfer(amount, recipientAccount) {
    if (amount > 0 && amount <= atm.balance) {
        atm.balance -= amount;
        atm.miniStatement.push(`Transferred: $${amount} to account ${recipientAccount}`);
        console.log(`Successfully transferred $${amount} to account ${recipientAccount}.`);
    } else {
        console.log("Invalid or insufficient funds.");
    }
}

// Mini Statement function
function miniStatement() {
    console.log("Mini Statement:");
    for (let i = 0; i < atm.miniStatement.length; i++) {
        console.log(atm.miniStatement[i]);
    }
}

// Example usage
let userPin = 1234; // User input for PIN
if (authenticate(userPin)) {
    deposit(500);
    withdraw(200);
    balanceEnquiry();
    moneyTransfer(100, "987654321");
    miniStatement();
} else {
    console.log("Authentication failed. Incorrect PIN.");
}
