import { Column, Entity, PrimaryColumn, OneToMany } from "typeorm";
import { Service } from '../../service/entities/service.entity';



@Entity("submission")
export class Submission {
    @PrimaryColumn()
    submission_id: String;

    @Column()
    student_id: String;

    @Column()
    submission_type: String;

    @Column()
    status: String;

    @Column()
    date_submitted: Date;

    @Column()
    last_modified: Date;

    @OneToMany(() => Service, service => service.submission_id)  // Quan hệ 1-n với service
    services: Service[];
}

