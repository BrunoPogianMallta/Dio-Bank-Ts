import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    try {
      if(this.isValidAccount()){
        this.balance += value
        console.log (`Empréstimo de R$: ${value} aprovado!`)
      }
    } catch (error) {
      console.log(error)
    }
  }
}
