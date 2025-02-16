export class ReserveDTO {
  constructor(
    private readonly id: string,
    private readonly transactionId: string,
    private readonly startDate: Date,
    private readonly endDate: Date | undefined,
    private readonly yield: number,
  ) {}

  getId(): string {
    return this.id
  }

  getTransactionId(): string {
    return this.transactionId
  }

  getStartDate(): Date {
    return this.startDate
  }

  getEndDate(): Date | undefined {
    return this.endDate
  }

  getYield(): number {
    return this.yield
  }
}
