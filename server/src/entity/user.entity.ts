import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {SubjectEntity} from "./subject.entity";
import {Exclude} from "class-transformer";

@Entity({name: "users"})
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true, nullable: false})
    nick: string;

    @Column({unique: true, nullable: false})
    email: string

    @Exclude()
    @Column({unique: true, nullable: false})
    password: string

    @OneToMany(() => SubjectEntity, (subject) => subject.user )
    subjects: SubjectEntity
}