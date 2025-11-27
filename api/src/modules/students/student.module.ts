import { Module } from "@nestjs/common";
import { StudentsController } from "./student.controller";
import { StudentsService } from "./student.service";

@Module({
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
