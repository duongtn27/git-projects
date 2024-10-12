import {Entity, Column, PrimaryColumn} from 'typeorm';

@Entity('course')
export class course {
    @PrimaryColumn()
    id: String; 

    @Column()
    name: String

    @Column() 
    price: number

    // @Column()
    // examDate: ?
    
    // @Column()
    // courseWorkSubmissionDate: ?

    @Column()
    term: number

    @Column()
    credit: number

    @Column()
    lecturer: []

}



