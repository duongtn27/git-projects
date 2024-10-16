import { Column, Entity, PrimaryColumn, ManyToOne } from "typeorm";
import { Submission } from '../../submission/entities/submission.entity';

@Entity("service")
export class Service {
    @PrimaryColumn()
    service_id: String;

    @Column()
    service_name: String;

    @Column()
    description: String;

    @ManyToOne(() => Submission, submission => submission.services)
    @Column() 
    submission_id: String;  // Foreign Key

    @ManyToOne(() => Submission, submission => submission.services)  // Quan hệ n-1 với submission
    submission: Submission;

    @Column()
    status: String;

    @Column()
    date_requested: Date;

    @Column({ nullable: true })
    date_completed: Date;

    @Column()
    handler: String;
}
