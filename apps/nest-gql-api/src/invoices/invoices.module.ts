import { Module } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { InvoicesResolver } from './invoices.resolver';
import { InvoicesCronService } from './invoices-cron.service';

@Module({
  providers: [InvoicesService, InvoicesResolver, InvoicesCronService],
})
export class InvoicesModule {}
