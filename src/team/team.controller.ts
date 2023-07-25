import { Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { ITeam } from 'src/interfaces/team.interface';

@Controller('team')
export class TeamController {
  @Get()
  getAllTeams(): ITeam[] {
    // Get all Teams from the database
    return [{ name: 'uno', members: [{ name: 'steve', teamName: 'uno' }] }];
  }

  @Get(':id')
  getTeam(@Param('id') id: string): ITeam {
    // Get specific Team
    return { name: 'uno', members: [{ name: 'steve', teamName: 'uno' }] };
  }

  @Patch(':id')
  updateTeam(@Param('id') id: string): void {
    // edit specific Team
  }

  @Delete(':id')
  deleteTeam(@Param('id') id: string): void {
    // remove specific Team (probs just add a deleted tag)
  }
}
