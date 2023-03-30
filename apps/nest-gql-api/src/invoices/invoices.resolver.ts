import { Query, Args, Resolver, Subscription } from '@nestjs/graphql';
import { InvoicesService } from './invoices.service';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver()
export class InvoicesResolver {
  constructor(private invoicesService: InvoicesService) {}

  @Query()
  async getInvoice(@Args('id') id: string) {
    await pubSub.publish('INVOICE_REQUESTED', {
      invoiceRequested: {
        invoiceId: id,
        tag: 'REQUESTED',
      },
    });

    const invoice = await this.invoicesService.getInvoice(id);

    await pubSub.publish('INVOICE_QUERIED', {
      invoiceRequested: {
        invoiceId: invoice ? invoice.id : null,
        tag: 'QUERIED',
      },
    });

    return invoice;
  }

  @Subscription()
  invoiceRequested() {
    return pubSub.asyncIterator(['INVOICE_REQUESTED', 'INVOICE_QUERIED']);
  }
}
