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
    if (cpf.match(/(\d)\1{10}/) !== null) {
      return false;
    }
    if (cpf.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/) !== null) {
      return false;
    }
    if (
      cpf !==
      ((cpf
        .split('')
        .map(Number)
        .reduce(
          (total, value, index) =>
            index < 9
              ? total + value * (10 - index)
              : total + (value % 10) * (12 - index),
          0,
        ) *
        10) %
        11) +
        ''
    ) {
      return false;
    }
    return true;
  }

  defaultMessage() {
    return `Número do CPF inválido. Por favor, insira um número válido com formato 000.000.000-00.`;
  }
}
