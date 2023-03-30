import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Invoice } from './invoices.entity';

// export interface Invoice {
//   id: string;
//   currency: string;
//   amount: string;
// }

@Injectable()
export class InvoicesService {
  constructor(
    @InjectDataSource()
    private dataSource: DataSource,
  ) {}
  getInvoice(id: string): Promise<Invoice | null> {
    const query = this.dataSource.getRepository(Invoice);

    return query
      .createQueryBuilder('invoices')
      .andWhere('invoices.id=:id', { id })
      .getOne();
  }
}
