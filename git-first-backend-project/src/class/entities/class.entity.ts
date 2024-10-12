import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity('group')
export class group{
    @PrimaryColumn({type: String})
    id: String 

    @Column()
    name: String 

    // @Column()
    // students : []

    @Column()
    lecturer: String //ID of lecturer
    
    @Column()
    semester: number 

    @Column()
    headcount: number
    
    
}