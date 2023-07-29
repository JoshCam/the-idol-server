import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { ITeam } from 'src/interfaces/team.interface';
import { TeamsService } from './teams.service';
import { ITeamsAndMembers } from 'src/interfaces/teamAndMembers.interface';
import { CreateTeamDto } from 'src/dtos/createTeam.dto';
import { instanceToPlain } from 'class-transformer';
import { EditTeamDto } from 'src/dtos/editTeam.dto';

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

  @Patch()
  async editTeam(@Body() editTeamDto: EditTeamDto): Promise<ITeam> {
    const { teamName, teamId } = instanceToPlain(editTeamDto);
    return await this.teamsService.editTeam(teamName, teamId);
  }
}
