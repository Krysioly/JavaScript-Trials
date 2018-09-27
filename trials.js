// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = 'Balloonicorn';
const accountNumber = '123456';
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ['123 Main Street', '683 Sutter Street', '1600 Pennsylvania Ave'];

const phoneNumbers = new Map();

// Add some phone numbers to our map
phoneNumbers.set('home', '510-867-5309');
phoneNumbers.set('mobile', '415-555-1212');
phoneNumbers.set('business', '415-123-4567');


// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information
function printAccountInfo(accountHolder, accountNumber, businessName) {
  console.log(`Account Holder Name: ${accountHolder}`);
  console.log(`Account Holder Number: ${accountNumber}`);
  console.log(`Business Name: ${businessName}`);
}

// Add function to print all addresses, including a header
function printAddresses(addresses) {
  console.log('Addresses:');
  for (let address of addresses) {
    console.log(address);
  }
}

// Add function to print phone types and numbers
function printPhoneNumbers(phoneNumbers) {
  console.log('Phone Numbers:');
  for (let [type, phoneNumber] of phoneNumbers) {
    console.log(`${type}: ${phoneNumber}`);
  }
}


// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions
const transactions = new Map();

// Add function to add transactions
function addTransaction(date, ammount) {
  transactions.set(date, ammount);
}

// Use the function to add transactions
addTransaction('May-2', -500);
addTransaction('May-13', +1200);
addTransaction('May-15', -100);
addTransaction('May-21', -359);
addTransaction('May-29', +2200);

// Add function to show balance status
function showBalanceStatus(balance) {
  console.log(`Balance: ${balance}`);
  if (balance < 0) {
    console.log('YOU ARE SUPER OVERDRAWN');
  } else if (balance < 20) {
    console.log('Warning: you are close to zero balance');
  } else {
    console.log('Thank you for your business');
  }
}

// Add function to show transactions
function showTransaction(transactions, balance) {
  console.log(`Starting balance : ${balance}`);
  for (let [date, ammount] of transactions) {
    let type = 'deposit';
    if (ammount < 0) {
      type = 'Withdrawl';
    }
    balance = balance + ammount;
    console.log(`Date: ${date}, Type: ${type}, Ammount: ${ammount}, Balance: ${balance}`);
  }
  if (balance < 0) {
    console.log('Balance fell below zero 25 dollar fee has been charged to account');
    balance = balance - 25;
  }
  showBalanceStatus(balance);
}

let balance = 26000;
//showTransaction(transactions, balance);

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info
const customer = {
  accountHolder: accountHolder,
  accountNumber: accountNumber,
  businessName: businessName,
  addresses: addresses,
  phoneNumbers: phoneNumbers,
  transactions: transactions,
  balance: balance
};

// Function to add customer attributes
function addMelonAndPets(melon='Cantaloupe', numPets=0) {
  customer.melon = melon;
  customer.numPets = numPets;
}

// Add attributes for this user
addMelonAndPets('Casaba', 2);

// ///////////////////////////////////////////////////////
// Getting a Business Loan
function isPreferred(customer) {
  let preferred = false;
  if (customer.melon === 'Casaba' || customer.numPets > 5) {
    preferred = true;
  }
  return preferred;
}

// Function to return loan rate
function loanInterestRateCalculator(income, customer) {
  let preferred = isPreferred(customer);
  let interestRate;
  if (income < 100000) {
    interestRate = 0.08;
    if (preferred) {
      interestRate = 0.05;
    }
  } else if (income < 200000) {
    interestRate = 0.07;
    if (preferred) {
      interestRate = 0.04;
    }
  } else {
    interestRate = 0.04;
  }
  return interestRate;
}

// ///////////////////////////////////////////////////////
// Account Report

// Add function to show bank customer report
function printFullReport(customer) {
  printAccountInfo(customer.accountHolder, customer.accountNumber, customer.businessName);
  printPhoneNumbers(customer.phoneNumbers);
  printAddresses(customer.addresses);
  showTransaction(customer.transactions, customer.balance);
  if (isPreferred(customer)) {
    console.log('Congrates on being a premiere customer');
  }
}

printFullReport(customer);


// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses
const frequentCustomers = new Map();
frequentCustomers.set('Mel Melitipolski', '707 Birch Steet');
frequentCustomers.set('Barbara Brown', '8997 Jones Street');

// Write a function to return the address of a given person
function getAddress(name) {
  if (frequentCustomers.has(name)) {
    return frequentCustomers.get(name);
  } else {
    console.log(`${name} is not there`);
  }
}
// console.log(getAddress('Barbara Brown'));
// getAddress('Mark');
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Add a function to create an employee schedule for the week 
function employeeSchedule(employeesList) {
  let schedule = [];
  let employee;
  let randomIndex;
  for (let i = 0; i < 6; i += 1) {
    randomIndex = getRandomInt(employeesList.length);
    employee = employeesList[randomIndex];
    schedule.push(employee);
  }
  return schedule;
}

let employeesList = ['Ann','Tom','Bob'];
console.log(employeeSchedule(employeesList));
console.log(employeeSchedule(employeesList));
console.log(employeeSchedule(employeesList));
console.log(employeeSchedule(employeesList));
console.log(employeeSchedule(employeesList));
console.log()

employeesList = ['Ann', 'Tom', 'Bob', 'Duck', 'Cat', 'Mark'];
console.log(employeeSchedule(employeesList));
console.log(employeeSchedule(employeesList));
console.log(employeeSchedule(employeesList));
console.log(employeeSchedule(employeesList));
console.log(employeeSchedule(employeesList));
// Add a function for weekly hours




