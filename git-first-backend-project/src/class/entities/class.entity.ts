import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity('group')
export class group{
    @PrimaryColumn({type: String})
    id: String 

    @Column()
    name: String 
    
    @Column()
    semester: number 

}