import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { ITeam } from 'src/interfaces/team.interface';
import { TeamsService } from './teams.service';
import { ITeamsAndMembers } from 'src/interfaces/teamAndMembers.interface';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Get()
  async getAllTeams(): Promise<ITeamsAndMembers> {
    return await this.teamsService.getAllTeams();
  }

  @Get(':id')
  async getTeam(@Param('id', ParseIntPipe) id: number): Promise<any> {
    // Get specific Team
    // return await this.teamsService.getTeam(id);
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
