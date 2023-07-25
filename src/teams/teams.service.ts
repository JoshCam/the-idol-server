import { Injectable } from '@nestjs/common';
import { ITeam } from 'src/interfaces/team.interface';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TeamsService {
  constructor(private prisma: PrismaService) {}

  /**
   * Method to get all teams and their members
   * @returns an array of teams with any members included
   */
  async getAllTeams(): Promise<ITeam[]> {
    return await this.prisma.teams.findMany({
      select: {
        name: true,
        members: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async getTeam(id: number) {
    // check id is number
    return this.prisma.teams.findUnique({
      where: {
        id,
      },
      include: {
        members: {
          select: {
            name: true,
          },
        },
      },
    });
  }
}
