import { CompanyAccount } from './class/CompanyAccount';
import { NewAccount } from './class/newAccount';
import { PeopleAccount } from './class/PeopleAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10);
console.log(peopleAccount);
peopleAccount.deposit(130);

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20);
companyAccount.deposit(280);

const newAccount: NewAccount = new NewAccount('Nova Conta', 30);
newAccount.deposit(50); // Isso realizará um depósito de R$ 60

console.log(companyAccount.getAccountNumber());
console.log(peopleAccount.getAccountNumber());
console.log(newAccount.getAccountNumber());
