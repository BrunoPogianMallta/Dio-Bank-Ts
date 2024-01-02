export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  protected balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  // setName = (name: string): void => {
  //   this.name = name
  //   console.log('Nome alterado com sucesso!')
  // }

  getName = (): string => {
    return this.name
  }

  getAccountNumber = (): number =>{
    return this.accountNumber
  }

  deposit(value: number): void {
    if (this.isValidAccount()) {
      // Lógica para depósito
      this.balance += value;
      console.log(`Depósito de R$: ${value} realizado com sucesso.`);
    } else {
      console.log('Conta inválida para depósito');
    }
  }




  withdraw = (value: number): string => {
    if((!this.validateStatus())){
     return 'Conta inexistente'
    }
    if(this.validateStatus() && this.balance > value){
       this.balance -= value
      return `Você sacou R$: ${value}`
    }
    throw Error('Você não possui fundos suficientes')
    
  }
  

  getBalance = (): void => {
    console.log(this.balance)
  }

  public isValidAccount =():boolean =>{
    try {
      return this.validateStatus();  
    } catch (error) {
      return false;
    }
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
