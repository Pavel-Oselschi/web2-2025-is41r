import { ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateStudentDto {
  @ApiPropertyOptional()
  name?: string;

  @ApiPropertyOptional()
  group?: string;

  @ApiPropertyOptional()
  averageMark?: number;
}
