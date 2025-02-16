export enum TransactionType {
  RESERVATION = 'Reserva',
  PAYMENT = 'Pagamento',
  RECEIPT = 'Recebimento',
}

export enum PaymentMethodType {
  CARTAO = 'Cartão',
  DINHEIRO = 'Dinheiro',
  TRANSFERENCIA = 'Transferência',
  PIX = 'Pix',
  BOLETO = 'Boleto',
  CHEQUE = 'Cheque',
  OUTROS = 'Outros',
}

export enum ReceiptMethodType {
  SALARIO = 'Salário',
  VENDA = 'Venda',
  EXTRA = 'Extra',
  TICKET = 'Ticket',
  INVESTIMENTO = 'Investimento',
  DIVIDENDO = 'Dividendo',
  REEMBOLSO = 'Reembolso',
  OUTROS = 'Outros',
}
