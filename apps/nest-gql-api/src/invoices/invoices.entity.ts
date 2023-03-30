import { Entity, Column } from 'typeorm';
import { Base } from '../common/entities/base.entity';

@Entity('invoices')
export class Invoice extends Base {
  @Column({ type: 'varchar' })
  currency: string;

  @Column({ type: 'float' })
  amount: number;
}
