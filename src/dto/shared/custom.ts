import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'isValidDateString', async: false })
export class isValidDateString implements ValidatorConstraintInterface {
  validate(date: string) {
    return date.match(/^\d{4}-\d{2}-\d{2}$/) !== null;
  }

  defaultMessage() {
    return `Data inválida. Use o formato YYYY-MM-DD.`;
  }
}

@ValidatorConstraint({ name: 'isValidCPF', async: false })
export class isValidCPF implements ValidatorConstraintInterface {
  validate(cpf: string) {
    if (cpf.length !== 14) {
      return false;
    }
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.match(/(\d)\1{10}/) !== null) {
      return false;
    }
    let add = 0;
    for (let i = 0; i < 9; i++) {
      add += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
      rev = 0;
    }
    if (rev !== parseInt(cpf.charAt(9))) {
      return false;
    }
    add = 0;
    for (let i = 0; i < 10; i++) {
      add += parseInt(cpf.charAt(i)) * (11 - i);
    }
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
      rev = 0;
    }
    if (rev !== parseInt(cpf.charAt(10))) {
      return false;
    }
    return true;
  }

  defaultMessage() {
    return `Número do CPF inválido. Por favor, insira um número válido com formato 000.000.000-00.`;
  }
}
