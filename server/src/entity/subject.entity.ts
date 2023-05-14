import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UserEntity} from "./user.entity";
import {TaskEntity} from "./task.entity";

@Entity({name: "subjects"})
export class SubjectEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: false})
    name: string;

    @Column({nullable: false})
    desc: string

    @Column({nullable: false, default: 0})
    points: number

    @ManyToOne(() => UserEntity, (user) => user.subjects)
    user: UserEntity

    @OneToMany(() => TaskEntity, (task) => task.subject)
    tasks: TaskEntity[]

}