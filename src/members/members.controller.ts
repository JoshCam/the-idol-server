import { Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { IMember } from 'src/interfaces/member.interface';
import { PrismaService } from 'src/prisma.service';

@Controller('/members')
export class MembersController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getAllMembers(): Promise<IMember[] | null> {
    return await this.prisma.members.findMany({
      select: {
        name: true,
        team: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  @Get('/team/:id')
  getAllTeamMembers(@Param('id') id: string): IMember[] {
    // Get all members from the database for a specified team
    return [{ name: 'steve' }];
  }

  @Get(':id')
  getMember(@Param('id') id: string): IMember {
    // Get specific member
    return { name: 'kate' };
  }

  @Patch(':id')
  updateMember(@Param('id') id: string): IMember {
    // edit specific member
    return { name: 'kate' };
  }

  @Delete(':id')
  deleteMember(@Param('id') id: string): IMember {
    // remove specific member (probs just add a deleted tag)\
    return { name: 'kate' };
  }
}
