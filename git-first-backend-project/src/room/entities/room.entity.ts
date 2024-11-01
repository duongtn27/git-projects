import { Column, Entity, IsNull, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Campus } from '../../campus/entities/campus.entity'
import { Schedules } from '../../schedule/entities/schedule.entity'
@Entity("rooms")
export class Room {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    description: string;

    @Column({ nullable: true })
    status: string;

    @Column()
    room_name: string;

    @Column({ nullable: true })
    campus_id: string;

    @ManyToOne(() => Campus, campus => campus.rooms) 
    campus: Campus;

    @ManyToOne(() => Schedules, schedule => schedule.rooms) 
    schedule: Schedules;
}