export enum TransactionType {
  reservation = 'Reserva',
  payment = 'Pagamento',
  receipt = 'Recebimento',
}

export enum PaymentType {
  CARTAO = 'Cartão',
  DINHEIRO = 'Dinheiro',
  TRANSFERENCIA = 'Transferência',
  PIX = 'Pix',
  BOLETO = 'Boleto',
  CHEQUE = 'Cheque',
  OUTROS = 'Outros',
}

export enum ReceiptType {
  SALARIO = 'Salário',
  VENDA = 'Venda',
  EXTRA = 'Extra',
  TICKET = 'Ticket',
  INVESTIMENTO = 'Investimento',
  DIVIDENDO = 'Dividendo',
  REEMBOLSO = 'Reembolso',
  OUTROS = 'Outros',
}
