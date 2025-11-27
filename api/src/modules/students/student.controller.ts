import { Controller, Get, Post, Put, Delete, Param, Body, HttpException, HttpStatus } from "@nestjs/common";
import { StudentsService } from "./student.service";
import { CreateStudentDto } from "./student.create.dto";
import { UpdateStudentDto } from "./student.update.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Students')
@Controller('students')
export class StudentsController {

  constructor(private readonly service: StudentsService) {}

  @Get()
  getAll() {
    return this.service.getStudents();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    const student = this.service.getStudentById(Number(id));
    if (!student) throw new HttpException('Not Found', HttpStatus.NOT_FOUND);

    return student;
  }

  @Post()
  create(@Body() dto: CreateStudentDto) {
    const created = this.service.createStudent(dto);

    if (!created) throw new HttpException('Error', HttpStatus.INTERNAL_SERVER_ERROR);

    return "Success";
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateStudentDto) {
    const updated = this.service.updateStudent(Number(id), dto);

    if (!updated) throw new HttpException('Not Found', HttpStatus.NOT_FOUND);

    return "Success";
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    const deleted = this.service.deleteStudent(Number(id));

    if (!deleted) throw new HttpException('Error', HttpStatus.INTERNAL_SERVER_ERROR);

    return {};
  }
}
