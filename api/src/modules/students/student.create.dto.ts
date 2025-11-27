import { ApiProperty } from "@nestjs/swagger";

export class CreateStudentDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  group: string;

  @ApiProperty()
  averageMark: number;
}
