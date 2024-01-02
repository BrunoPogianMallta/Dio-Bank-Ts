import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  // Método de depósito específico para NewAccount
  deposit(value: number): void {
    if (this.isValidAccount()) {
      // Acrescenta 10 a mais ao valor informado para depósito
      super.deposit(value + 10);
      console.log(`Depósito de R$: ${value} + R$ 10 realizado com sucesso.`);
    } else {
      console.log('Conta inválida para depósito');
    }
  }
}
