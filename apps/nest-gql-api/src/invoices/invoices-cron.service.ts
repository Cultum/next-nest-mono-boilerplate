import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
// import { Cron } from "@nestjs/schedule";

export class InvoicesCronService {
  constructor(
    @InjectDataSource()
    private dataSource: DataSource,
  ) {}

//  @Cron("* * * * * *")
  handleBinanceRequest(): any {

    console.log("DATE:", new Date().toISOString())

    return
  }
}
