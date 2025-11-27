import { Injectable } from "@nestjs/common";
import { CreateStudentDto } from "./student.create.dto";
import { UpdateStudentDto } from "./student.update.dto";
import { Student } from "./student.entity";

@Injectable()
export class StudentsService {
  private students: Student[] = [];

  getStudents(): Student[] {
    return this.students;
  }

  getStudentById(id: number): Student | undefined {
    return this.students.find(s => s.id === id);
  }

  createStudent(dto: CreateStudentDto): Student | null {
    const exists = this.students.find(s => s.id === dto.id);
    if (exists) return null;

    const newStudent: Student = { ...dto };
    this.students.push(newStudent);
    return newStudent;
  }

  updateStudent(id: number, dto: UpdateStudentDto): Student | null {
    const student = this.students.find(s => s.id === id);
    if (!student) return null;

    Object.assign(student, dto);
    return student;
  }

  deleteStudent(id: number): boolean {
    const index = this.students.findIndex(s => s.id === id);
    if (index === -1) return false;

    this.students.splice(index, 1);
    return true;
  }
}
