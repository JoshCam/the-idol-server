import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ITeam } from 'src/interfaces/team.interface';
import { TeamsService } from './teams.service';
import { ITeamsAndMembers } from 'src/interfaces/teamAndMembers.interface';
import { CreateTeamDto } from 'src/dtos/createTeam.dto';
import { instanceToPlain } from 'class-transformer';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Get('/members')
  async getAllTeamsAndMembers(): Promise<ITeamsAndMembers> {
    return await this.teamsService.getAllTeamsAndMembers();
  }

  @Get()
  async getAllTeams(): Promise<ITeam[]> {
    return await this.teamsService.getAllTeams();
  }

  @Post()
  async addTeam(@Body() createTeamDto: CreateTeamDto): Promise<ITeam> {
    const { teamName } = instanceToPlain(createTeamDto);
    return await this.teamsService.addTeam(teamName);
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
