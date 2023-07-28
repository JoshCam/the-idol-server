import { Controller, Delete, Get, Param, Patch } from '@nestjs/common';
// import { any } from 'src/interfaces/member.interface';
import { PrismaService } from 'src/prisma.service';

@Controller('/members')
export class MembersController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getAllMembers(): Promise<any> {
    return await this.prisma.members.findMany({
      select: {
        memberId: true,
        memberName: true,
        teamName: {
          select: {
            teamId: true,
            teamName: true,
          },
        },
      },
    });
  }

  @Get('/team/:id')
  getAllTeamMembers(@Param('id') id: string): any[] {
    // Get all members from the database for a specified team
    return [{ name: 'steve' }];
  }

  @Get(':id')
  getMember(@Param('id') id: string): any {
    // Get specific member
    return { name: 'kate' };
  }

  @Patch(':id')
  updateMember(@Param('id') id: string): any {
    // edit specific member
    return { name: 'kate' };
  }

  @Delete(':id')
  deleteMember(@Param('id') id: string): any {
    // remove specific member (probs just add a deleted tag)\
    return { name: 'kate' };
  }
}
