import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class EditTeamDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  teamId: number;
}
