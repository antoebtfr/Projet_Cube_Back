import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity('tokens')

export class Token {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type : 'int' })
    userId?: User; 
    
    @Column({ type : 'varchar', length: 100, default: '',})
    key!: string; 

}