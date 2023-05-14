import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {SubjectEntity} from "./subject.entity";

@Entity({name: "tasks"})
export class TaskEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    name: string;

    @Column({nullable: false})
    deadline: string;

    @Column({nullable: false})
    points: number;

    @Column({nullable: false, default: false})
    isChecked: boolean

    @ManyToOne(() => SubjectEntity, (subject) => subject.tasks )
    subject: SubjectEntity

}