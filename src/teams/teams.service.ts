import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from 'src/dtos/createTeam.dto';
import { ITeam } from 'src/interfaces/team.interface';
// import { IMember } from 'src/interfaces/member.interface';
// import { ITeam } from 'src/interfaces/team.interface';
import { ITeamsAndMembers } from 'src/interfaces/teamAndMembers.interface';
import { MembersService } from 'src/members/members.service';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TeamsService {
  constructor(
    private prisma: PrismaService,
    private readonly membersService: MembersService,
  ) {}

  /**
   * Method to get all teams and their members
   * @returns an array of teams with any members included
   */
  async getAllTeamsAndMembers(): Promise<ITeamsAndMembers> {
    const teams = await this.prisma.teams.findMany({
      select: {
        teamId: true,
        teamName: true,
      },
    });
    const members = await this.membersService.getAllMembers();
    return { teams, members };
  }

  async getAllTeams(): Promise<ITeam[]> {
    return await this.prisma.teams.findMany();
  }

  async addTeam(teamName: string): Promise<ITeam> {
    return await this.prisma.teams.create({
      data: { teamName },
    });
  }

  // formatTeamAndMembers(teams: ITeam[], members: IMember[]): ITeamsAndMembers {
  //   return { teams, members };
  // }

  // async getTeam(id: number) {
  //   // check id is number
  //   return this.prisma.teams.findUnique({
  //     where: {
  //       teamId,
  //     },
  //     include: {
  //       members: {
  //         select: {
  //           memberName: true,
  //         },
  //       },
  //     },
  //   });
  // }
}
